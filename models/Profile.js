const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  posts: {
    type: Number,
    default: 0,
  },
  votes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('profile', ProfileSchema);
