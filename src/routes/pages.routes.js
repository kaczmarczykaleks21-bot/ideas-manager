const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../../public/views/index.html'));
  } catch (err) {
    res.status(500).send('Error loading page!');
  }
});

router.get('/auth/login', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../../public/views/login.html'));
  } catch (err) {
    res.status(500).send('Error loading page!');
  }
});

router.get('/auth/register', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../../public/views/register.html'));
  } catch (err) {
    res.status(500).send('Error loading page!');
  }
});

router.get('/demo', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../../public/views/demo.html'));
  } catch (err) {
    res.status(500).send('Error loadind page!');
  }
});

module.exports = router;
