// Firebase configuration and auth export (module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlJGO4YqRL2CtMq9hpYOWMuesnpDRbyR4",
  authDomain: "signup-6c531.firebaseapp.com",
  projectId: "signup-6c531",
  storageBucket: "signup-6c531.firebasestorage.app",
  messagingSenderId: "1075553175213",
  appId: "1:1075553175213:web:257c58be44959c48b7e824",
  measurementId: "G-L47L95383V"
};

const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch (e) { /* analytics may fail in some envs */ }

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
