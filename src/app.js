const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const pagesRouter = require('./routes/pages.routes');
const authRouter = require('./routes/user.routes');
const { stat } = require('fs');

app.use('/', pagesRouter);
// app.use('/api/v1/users');
// app.use('/api/v1/ideas');
app.use('/api/v1', authRouter);

app.all('/{*splat}', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;

  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
