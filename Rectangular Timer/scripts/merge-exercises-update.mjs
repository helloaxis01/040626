#!/usr/bin/env node
/**
 * Merges exercises_update.json (track label keys → exercise rows with position/next/then/tip)
 * into public_web/axis_data.json. Matches by track label, section label, exercise base name, subtitle.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const UPDATE_PATH =
  process.argv[2] || path.join(process.env.HOME || "", "Downloads/exercises_update.json");
const AXIS_PATH = path.join(ROOT, "public_web", "axis_data.json");

function normSub(s) {
  return String(s ?? "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/** Strip trailing " - Right …" / " - Left …" for bilateral rows. */
function exerciseBaseName(name) {
  return String(name ?? "")
    .replace(/\s*-\s*(Right|Left)\b.*$/i, "")
    .trim();
}

function normNameKey(s) {
  return String(s ?? "")
    .normalize("NFKC")
    .replace(/[\u2013\u2014\u2212]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function collectMatches(track, sectionLabel, item) {
  const wantSub = normSub(item.subtitle);
  const exactWant = normNameKey(item.exercise);
  const baseWant = normNameKey(exerciseBaseName(item.exercise));
  const exact = [];
  const base = [];
  for (const sec of track.sections || []) {
    if (sec.label !== sectionLabel) continue;
    for (const ex of sec.exercises || []) {
      if (normSub(ex.sub) !== wantSub) continue;
      if (normNameKey(ex.name) === exactWant) exact.push(ex);
      else if (normNameKey(exerciseBaseName(ex.name)) === baseWant) base.push(ex);
    }
  }
  return exact.length ? exact : base;
}

function collectMatchesLoose(track, item) {
  const wantSub = normSub(item.subtitle);
  const exactWant = normNameKey(item.exercise);
  const baseWant = normNameKey(exerciseBaseName(item.exercise));
  const exact = [];
  const base = [];
  for (const sec of track.sections || []) {
    for (const ex of sec.exercises || []) {
      if (normSub(ex.sub) !== wantSub) continue;
      if (normNameKey(ex.name) === exactWant) exact.push(ex);
      else if (normNameKey(exerciseBaseName(ex.name)) === baseWant) base.push(ex);
    }
  }
  return exact.length ? exact : base;
}

function applyPack(ex, item) {
  ex.position = item.position;
  ex.next = item.next;
  ex.then = item.then;
  ex.tip = item.tip;
  ex.start = item.position;
}

const data = JSON.parse(fs.readFileSync(AXIS_PATH, "utf8"));
const updates = JSON.parse(fs.readFileSync(UPDATE_PATH, "utf8"));

const labelToTrackId = {};
for (const [tid, track] of Object.entries(data.TRACKS || {})) {
  if (track && track.label) labelToTrackId[track.label] = tid;
}

let applied = 0;
const unmatched = [];

for (const [trackLabel, items] of Object.entries(updates)) {
  const tid = labelToTrackId[trackLabel];
  if (!tid) {
    for (const item of items) {
      unmatched.push({ trackLabel, exercise: item.exercise, reason: "unknown track label" });
    }
    continue;
  }
  const track = data.TRACKS[tid];
  for (const item of items) {
    let matches = collectMatches(track, item.section, item);
    if (matches.length === 0) matches = collectMatchesLoose(track, item);
    if (matches.length === 0) {
      unmatched.push({
        trackLabel,
        section: item.section,
        exercise: item.exercise,
        subtitle: item.subtitle,
        reason: "no matching exercise",
      });
      continue;
    }
    for (const ex of matches) {
      applyPack(ex, item);
      applied++;
    }
  }
}

fs.writeFileSync(AXIS_PATH, JSON.stringify(data, null, 2) + "\n", "utf8");

console.log(
  JSON.stringify(
    {
      updateFile: UPDATE_PATH,
      axisFile: AXIS_PATH,
      appliedFieldUpdates: applied,
      updateRowsProcessed: Object.values(updates).reduce((n, a) => n + a.length, 0),
      unmatchedCount: unmatched.length,
      unmatched,
    },
    null,
    2,
  ),
);

if (unmatched.length) process.exitCode = 1;
