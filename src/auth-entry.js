import { onAuthStateChanged } from "firebase/auth";
import App from "./App.js";
import { auth } from "./firebase.js";

window.AXIS_AuthRoot = App;
window.AXIS_auth = auth;
window.AXIS_onAuthStateChanged = onAuthStateChanged;
