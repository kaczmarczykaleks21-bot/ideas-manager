const User = require('../models/usersModel');

// GET ALL USERS

exports.getAllUsers = async (req, res) => {
  try {
    const ideas = await Idea.find({ user: req.user.id });

    res.stauts(200).json({
      status: 'success',
      results: ideas.length,
      data: ideas,
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
  } catch (err) {}
};

// CREATE IDEA

exports.createUser = async (req, res) => {
  try {
    const newIdea = await Idea.create({
      title: req.body.title,
      description: req.body.description,
      user: req.user.id,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.modifyUser = async (req, res) => {};

exports.deleteUser = async (req, res) => {};
