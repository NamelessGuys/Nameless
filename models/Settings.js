const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  showNSFW: {
    type: Boolean,
    default: true,
  },
  blurNSFW: {
    type: Boolean,
    default: true,
  },
  emailNotif: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('setting', SettingsSchema);
