const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: [true, 'Login is required'],
    unique: true,
    trim: true,
    maxlength: [14, 'Login too long, 14 characters max'],
    minlength: [6, 'Login is too short, 6 characters min'],
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    maxlength: [14, 'Password is too long, 14 characters max'],
    minlength: [6, 'Password is too short, 6 characters min'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Password confirmation is required'],
    trim: true,
    maxlength: [14, 'Password confirmation is too long, 14 characters max'],
    minlength: [6, 'Password confirmation is too short, 6 characters min'],
  },
});

module.exports = mongoose.model('User', UserSchema);
