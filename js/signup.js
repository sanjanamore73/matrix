import { auth, googleProvider } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

const form = document.getElementById('signup-form');
const msg = document.getElementById('message');
const googleBtn = document.getElementById('google-signin');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  msg.textContent = '';
  if (!email || !password) {
    msg.textContent = 'Please enter email and password.';
    return;
  }

  msg.textContent = 'Creating account...';
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    msg.innerHTML = `Account created. A verification email was sent to <strong>${email}</strong>. Please check your inbox (and spam) and verify your email before signing in.`;
    await signOut(auth);
    form.reset();
  } catch (err) {
    msg.textContent = err.message || 'Failed to create account.';
  }
});

if (googleBtn) {
  googleBtn.addEventListener('click', async () => {
    msg.textContent = 'Opening Google sign-in...';
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      msg.innerHTML = `Signed in as <strong>${user.email}</strong>.`;
    } catch (err) {
      msg.textContent = err.message || 'Google sign-in failed.';
    }
  });
}
