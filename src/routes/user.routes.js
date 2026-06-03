const express = require('express');
const path = require('path');

const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', authController.signup);

router.route('/');
router.route('/:id');

module.exports = router;
