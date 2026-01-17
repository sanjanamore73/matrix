import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  let authLi = document.getElementById('nav-auth');
  if (!authLi) {
    authLi = document.createElement('li');
    authLi.id = 'nav-auth';
    authLi.className = 'nav-auth';
    authLi.innerHTML = `<a href="login.html" id="nav-login">Login</a><div id="nav-logout-container" style="display:none"><a href="#" id="nav-logout">Logout</a></div>`;
    navLinks.appendChild(authLi);
  }

  const navLogin = document.getElementById('nav-login');
  const navLogoutContainer = document.getElementById('nav-logout-container');
  const navLogout = document.getElementById('nav-logout');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.displayName || (user.email ? user.email.split('@')[0] : 'User');
      if (navLogin) {
        navLogin.textContent = name;
        navLogin.href = 'dashboard.html';
      }
      if (authLi) authLi.classList.add('signed-in');
    } else {
      if (navLogin) {
        navLogin.textContent = 'Login';
        navLogin.href = 'login.html';
      }
      if (authLi) authLi.classList.remove('signed-in');
    }
  });

  if (navLogout) {
    navLogout.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await signOut(auth);
        window.location.href = 'index.html';
      } catch (err) {
        console.error('Sign out error', err);
        window.location.href = 'index.html';
      }
    });
  }
});
