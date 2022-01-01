const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');
const { check, validationResult } = require('express-validator');
const multer = require('multer');

const upload = multer({ dest: 'public/files' });

router.post('/', upload.single('image'), (req, res) => {
  // Stuff to be added later
  console.log(req.file);
  console.log(req.body);
});

// @route     GET api/posts
// @desc      Get all posts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/posts/:id
// @desc      Get post by id
// @access    Private
router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/posts/upvotes/:id
// @desc      Upvote a post
// @access    Private
router.put('/upvotes/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been upvoted
    if (
      post.upvotes.filter((upvote) => upvote.user.toString() === req.user.id)
        .length > 0
    ) {
      const removeIndex = post.upvotes
        .map((upvote) => upvote.user.toString())
        .indexOf(req.user.id);
      post.upvotes.splice(removeIndex, 1);
    } else {
      post.upvotes.unshift({ user: req.user.id });
    }

    // Check if post has been downvoted
    if (
      post.downvotes.filter(
        (downvote) => downvote.user.toString() === req.user.id
      ).length > 0
    ) {
      const removeIndex = post.downvotes
        .map((downvote) => downvote.user.toString())
        .indexOf(req.user.id);
      post.downvotes.splice(removeIndex, 1);
    }

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/posts/downvotes/:id
// @desc      Downvote a post
// @access    Private
router.put('/downvotes/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.downvotes.filter(
        (downvote) => downvote.user.toString() === req.user.id
      ).length > 0
    ) {
      const removeIndex = post.downvotes
        .map((downvote) => downvote.user.toString())
        .indexOf(req.user.id);
      post.downvotes.splice(removeIndex, 1);
    } else {
      post.downvotes.unshift({ user: req.user.id });
    }

    // Check if post has been upvoted
    if (
      post.upvotes.filter((upvote) => upvote.user.toString() === req.user.id)
        .length > 0
    ) {
      const removeIndex = post.upvotes
        .map((upvote) => upvote.user.toString())
        .indexOf(req.user.id);
      post.upvotes.splice(removeIndex, 1);
    }

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/posts/comment/:id
// @desc      Comment on a post
// @access    Private
router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        username: user.usernname,
        avatar: user.avatar,
        user: user.id,
      };

      post.comments.unshift(newComment);

      await post.save();
      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/posts/report/:id
// @desc      Report a post
// @access    Private
router.put('/report/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.report.filter((report) => report.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: 'Post already Reported' });
    }

    post.report.unshift({ user: req.user.id });

    await post.save();
    res.json(post.report);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/posts/
// @desc      POST a post
// @access    Private

module.exports = router;
