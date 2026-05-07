const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
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
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true,
      maxlength: [14, 'Password is too long, 14 characters max'],
      minlength: [6, 'Password is too short, 6 characters min'],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', UserSchema);
