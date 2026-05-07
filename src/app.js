const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const pagesRouter = require('./routes/pages.routes');

app.use('/', pagesRouter);

module.exports = app;
