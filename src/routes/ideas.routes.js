const express = require('express');
const ideasController = require('../controllers/ideas.controller');

const router = express.Router();

router.route('/').get();

router.route('/:id');
