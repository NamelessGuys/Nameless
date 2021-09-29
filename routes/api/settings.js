const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Settings = require('../../models/Settings');
const User = require('../../models/User');

// @route     GET api/settings/me
// @desc      Get current user settings
// @access    Private
router.get('/me', auth, async (req, res) => {
  try {
    let settings = await Settings.findOne({
      user: req.user.id,
    });

    res.json(settings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/settings/:user_id
// @desc      Update the user settings
// @access    Private
router.put('/:user_id', auth, async (req, res) => {
  if (req.user.id !== req.params.user_id) {
    return res.status(400).json({ errors: [{ msg: 'Not Authorized' }] });
  }

  const updatedSettings = { ...req.body };

  try {
    const settings = await Settings.findOneAndUpdate(
      { user: req.params.user_id },
      updatedSettings,
      { new: true }
    );

    await settings.save();
    res.json(settings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
