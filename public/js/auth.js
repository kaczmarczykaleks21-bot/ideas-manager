'use strict';
console.log('auth.js');

// ID Przycisków
const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', () => {
  window.location.href = '/';
});
