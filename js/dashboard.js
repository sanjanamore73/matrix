import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

const welcome = document.getElementById('welcome');
const signoutBtn = document.getElementById('signout');

onAuthStateChanged(auth, (user) => {
  if (user) {
    welcome.innerHTML = `Signed in as <strong>${user.email}</strong>`;
    signoutBtn.style.display = 'inline-block';
  } else {
    // not signed in — redirect to login
    window.location.href = 'login.html';
  }
});

signoutBtn.addEventListener('click', async () => {
  await signOut(auth);
  window.location.href = 'login.html';
});
