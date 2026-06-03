'use strict';

// ID przycisków
const loginBtn = document.getElementById('loginBtn');
const goToDemoBtn = document.getElementById('goToDemoBtn');

loginBtn.addEventListener('click', () => {
  window.location.href = '/auth/login';
});

goToDemoBtn.addEventListener('click', () => {
  window.location.href = '/demo';
});
