import { auth, googleProvider } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

const form = document.getElementById('login-form');
const googleBtn = document.getElementById('google-signin');
const msg = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  msg.textContent = '';
  try {
    msg.textContent = 'Signing in...';
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'dashboard.html';
  } catch (err) {
    msg.textContent = err.message || 'Sign-in failed.';
  }
});

if (googleBtn) {
  googleBtn.addEventListener('click', async () => {
    msg.textContent = 'Opening Google sign-in...';
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = 'dashboard.html';
    } catch (err) {
      msg.textContent = err.message || 'Google sign-in failed.';
    }
  });
}
