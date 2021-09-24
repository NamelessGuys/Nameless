const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  posts: {
    type: Number,
  },
  votes: {
    type: Number,
  },
  comments: {
    type: Number,
  },
  score: {
    type: Number,
  },
  badges: [
    {
      badge_number: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model('profile', ProfileSchema);
