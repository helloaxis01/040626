/**
 * One-time migration: add position/next/then/tip to each exercise in axis_data.json,
 * split bilateral exercises into -R / -L entries with side-specific copy.
 * Run from repo: node "031726 REBUILD/scripts/migrate-axis-instructions.mjs"
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.join(__dirname, "..", "public_web", "axis_data.json");

function axisCleanInstructionLine(s) {
  if (typeof s !== "string") return "";
  return String(s).replace(/\s+/g, " ").trim();
}

function axisHasBilateralLanguage(text) {
  const t = String(text || "").toLowerCase();
  return /\bswitch sides?\b|\beach side\b|\bboth sides\b|\brepeat on the (left|right)\b|\bthen switch\b|\balternate\b/.test(t);
}

function axisGuessBodyPartFromExerciseName(name) {
  const n = String(name || "").toLowerCase();
  if (/\bhip\b|\bpigeon\b|\bglute\b|\bfigure four\b/.test(n)) return "Hip";
  if (/\bquad\b|\bhamstring\b|\bcalf\b|\bankle\b|\bfoot\b|\bleg\b/.test(n)) return "Leg";
  if (/\bshoulder\b|\barm\b|\bwrist\b|\belbow\b|\bpec\b|\bchest\b/.test(n)) return "Arm";
  if (/\bneck\b|\btrap\b/.test(n)) return "Neck";
  return "Side";
}

function axisMakeInstructionFields(ex, side) {
  const start = axisCleanInstructionLine(ex && ex.start);
  const cues = Array.isArray(ex && ex.steps)
    ? ex.steps.map((s) => axisCleanInstructionLine(s && s.cue)).filter(Boolean)
    : [];

  const cuesNoSwitch = cues.filter((c) => !axisHasBilateralLanguage(c));

  const want = side ? side.toLowerCase() : "";
  const cuesSide = want ? cuesNoSwitch.filter((c) => c.toLowerCase().includes(want)) : cuesNoSwitch;
  const pool = cuesSide.length ? cuesSide : cuesNoSwitch.length ? cuesNoSwitch : cues;

  const pick = (i) => pool[i] || "";

  let position = start || pick(0);
  let next = start ? pick(0) : pick(1);
  let then = start ? pick(1) : pick(2);
  let tip = start ? pick(2) : pick(3);

  if (!next) next = pick(0) || "";
  if (!then) then = pick(1) || pick(0) || "";
  if (!tip) tip = pick(2) || pick(1) || pick(0) || "";

  const sideWord = want ? want.toUpperCase() : "";
  const injectSide = (line) => {
    if (!want) return line;
    const lower = line.toLowerCase();
    if (lower.includes("left") || lower.includes("right")) return line;
    return line
      .replace(/\bone\b/gi, want)
      .replace(/\byour leg\b/gi, `your ${want} leg`)
      .replace(/\byour arm\b/gi, `your ${want} arm`)
      .replace(/\byour hip\b/gi, `your ${want} hip`);
  };

  position = injectSide(position);
  next = injectSide(next);
  then = injectSide(then);
  tip = injectSide(tip);

  return {
    position: axisCleanInstructionLine(position),
    next: axisCleanInstructionLine(next),
    then: axisCleanInstructionLine(then),
    tip: axisCleanInstructionLine(tip),
    sideLabel: sideWord ? `Perform on ${sideWord} side` : "",
  };
}

function axisIsBilateralExercise(ex) {
  if (!ex) return false;
  if (/-(R|L)$/.test(String(ex.id))) return false;
  const blob =
    [ex.sub, ex.start].filter(Boolean).join(" ") +
    " " +
    (Array.isArray(ex.steps) ? ex.steps.map((s) => s && s.cue).join(" ") : "");
  if (!axisHasBilateralLanguage(blob)) return false;
  const t = blob.toLowerCase();
  if (/\balternate\b|\bopposite arm and leg\b|\bcontralateral\b/.test(t)) return false;
  return true;
}

function hasExplicitFour(ex) {
  const p = axisCleanInstructionLine(ex.position);
  const n = axisCleanInstructionLine(ex.next);
  const t = axisCleanInstructionLine(ex.then);
  const tip = axisCleanInstructionLine(ex.tip);
  return Boolean(p && n && t && tip);
}

function migrateExercise(ex) {
  if (axisIsBilateralExercise(ex)) {
    const part = axisGuessBodyPartFromExerciseName(ex.name);
    const idBase = String(ex.id);
    const fr = axisMakeInstructionFields(ex, "right");
    const fl = axisMakeInstructionFields(ex, "left");
    const right = {
      ...ex,
      id: `${idBase}-R`,
      name: `${ex.name} - Right ${part}`,
      position: fr.position,
      next: fr.next,
      then: fr.then,
      tip: fr.tip,
      start: fr.position,
    };
    const left = {
      ...ex,
      id: `${idBase}-L`,
      name: `${ex.name} - Left ${part}`,
      position: fl.position,
      next: fl.next,
      then: fl.then,
      tip: fl.tip,
      start: fl.position,
    };
    return [right, left];
  }
  if (hasExplicitFour(ex)) {
    const p = axisCleanInstructionLine(ex.position);
    return [{ ...ex, position: p, next: axisCleanInstructionLine(ex.next), then: axisCleanInstructionLine(ex.then), tip: axisCleanInstructionLine(ex.tip), start: p }];
  }
  const f = axisMakeInstructionFields(ex, null);
  return [
    {
      ...ex,
      position: f.position,
      next: f.next,
      then: f.then,
      tip: f.tip,
      start: f.position,
    },
  ];
}

const raw = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
if (!raw.TRACKS || typeof raw.TRACKS !== "object") {
  throw new Error("Invalid axis_data.json: missing TRACKS");
}

for (const [trackId, track] of Object.entries(raw.TRACKS)) {
  const sections = Array.isArray(track.sections) ? track.sections : [];
  for (const sec of sections) {
    const exercises = Array.isArray(sec.exercises) ? sec.exercises : [];
    const next = [];
    for (const ex of exercises) {
      next.push(...migrateExercise(ex));
    }
    sec.exercises = next;
  }
  raw.TRACKS[trackId] = { ...track, sections };
}

fs.writeFileSync(jsonPath, JSON.stringify(raw, null, 2) + "\n", "utf8");
console.log("Wrote", jsonPath);
