import { onAuthStateChanged } from "firebase/auth";
import { axisOnboardingUrl } from "./axis-onboarding-url.js";
import Login from "./Login.js";
import React, { useEffect, useState } from "./react-shim.js";
import { auth, syncUserProfile } from "./firebase.js";

function isOnboarded() {
  try {
    const uid = auth && auth.currentUser && auth.currentUser.uid ? String(auth.currentUser.uid) : "";
    const scopedKey = uid ? `axis_onboarded:${uid}` : "axis_onboarded";
    const raw = localStorage.getItem(scopedKey);
    if (raw === null) return false;
    return JSON.parse(raw) === true;
  } catch (e) {
    return false;
  }
}

export default function App({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setLoading(false);
      try {
        if (u && u.uid) localStorage.setItem("axis_auth_uid", String(u.uid));
        else localStorage.removeItem("axis_auth_uid");
      } catch (e) {}
      if (u) {
        syncUserProfile(u).catch((err) => {
          try {
            console.error("AXIS: sync user profile failed", err);
          } catch (e) {}
        });
      }
      if (u && !isOnboarded()) {
        window.location.replace(axisOnboardingUrl());
      }
    });
    return () => unsub();
  }, []);

  if (loading) return null;
  if (!user) return React.createElement(Login);
  if (!isOnboarded()) return null;
  return children;
}
