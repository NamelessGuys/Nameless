const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Tag = require('../../models/Tag');
const Post = require('../../models/Post');
const mongoose = require('mongoose');

// @route     GET api/tags/:tag_name
// @desc      Get all posts by tag
// @access    Private

router.get('/:tag_name', auth, async (req, res) => {
  try {
    const tag = await Tag.findOne({ name: req.params.tag_name });
    let postID = [];
    tag.posts.forEach((post) => {
      postID.push(post.post);
    });
    let posts = [];

    postID.forEach(async (id) => {
      const post = await Post.find({ _id: mongoose.Types.ObjectId(id) });
      console.log(post);
      posts.push(post[0]);
    });

    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
