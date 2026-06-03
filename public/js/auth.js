'use strict';
console.log('auth.js');

// ID Przycisków
const goHome = document.getElementById('goHome');

goHome.addEventListener('click', () => {
  window.location.href = '/';
});
