'use strict';
console.log('index.js');

// ID przycisków
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  window.location.href = '/auth/login';
});
