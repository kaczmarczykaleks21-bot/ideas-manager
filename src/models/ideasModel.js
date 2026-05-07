const mongoose = require('mongoose');

const Idea = new mongoose.Schema({
  name: {
    type: String,
    default: 'idea',
    required: [true, 'Idea name is required'],
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['idea', 'in-progress', 'done', 'archived'],
    default: 'idea',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
  },
  tags: {
    type: String,
  },
  isFavourite: {
    type: Boolean,
    default: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Idea', ideaSchema);
