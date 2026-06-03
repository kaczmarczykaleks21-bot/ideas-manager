'use strict';

// NAVIGATION
const landingPageBtn = document.getElementById('landingPageBtn');
const menuBtn = document.getElementById('menuBtn');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  window.location.href = '/auth/login';
});

landingPageBtn.addEventListener('click', () => {
  window.location.href = '/';
});
