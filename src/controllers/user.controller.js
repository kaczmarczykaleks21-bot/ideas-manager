const User = require('../models/users.model');
const usersModel = require('../models/users.model');

// GET ALL USERS

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(id);

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// CREATE IDEA

exports.createUser = async (req, res) => {};

exports.modifyUser = async (req, res) => {};

exports.deleteUser = async (req, res) => {};
