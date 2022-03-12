const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const { User } = require('../../models/User');

// @route     GET api/profile/me
// @desc      Get current user profile
// @access    Private
router.get('/me', auth, async (req, res) => {
  try {
    let profile = await Profile.findOne({
      user: req.user.id,
    });
    if (!profile) {
      const profileUser = {
        user: req.user.id,
      };
      profile = new Profile(profileUser);
      await profile.save();
    }
    profile.populate('user', ['username', 'avatar', 'college', 'date']);

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/profile/user/:user_id
// @desc      Get profile by user ID
// @access    Public
router.get('/user/:user_id', async (req, res) => {
  try {
    let profile = await Profile.findOne({
      user: req.params.user_id,
    });
    if (!profile) {
      const profileUser = {
        user: req.params.user_id,
      };
      profile = new Profile(profileUser);
      await profile.save();
    }

    profile.populate('user', ['username', 'avatar', 'college', 'date']);

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).json('Server Error');
  }
});

// @route     PUT api/profile/:user_id
// @desc      Update the profile stats
// @access    Private
router.put('/:user_id', auth, async (req, res) => {
  if (req.user.id !== req.params.user_id) {
    return res.status(400).json({ errors: [{ msg: 'Not Authorized' }] });
  }

  const updatedStats = { ...req.body };

  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.params.user_id },
      updatedStats,
      { new: true }
    );

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
