const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const Tag = require('../../models/Tag');
const User = require('../../models/User');
const Post = require('../../models/Post');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const { off } = require('../../models/Profile');
// const model = require('../../NSFW_Model/nsfw_model.js');

// const upload = multer({ dest: 'public/files' });

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype.split('/')[1] === 'jpeg' ||
    file.mimetype.split('/')[1] === 'png' ||
    file.mimetype.split('/')[1] === 'jpg'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Not a image File!!'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

router.post(
  '/',
  auth,
  upload.single('image'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      
      let tags = req.body.tags.split(",");
      tags = tags.map(tag => {
        return tag.trim().substr(1);
      })
      tags = tags.filter(tag => tag!=='')
      if(tags.length===1 && tags[0]===''){
        tags = [];
      }
   
      

      const tagSet = new Set([...tags]);

      tags = Array.from(tagSet);

      if(tags.length>5){
        return res.status(404).json({ msg: 'Can not add more than 5 tags' });
      }

      let newPostObj = {
        title: req.body.title,
        text: req.body.text,
        nsfw: req.body.nsfw,
        user: req.user.id,
        college: user.college,
      }

      if(req.file!=undefined){
        newPostObj = {...newPostObj, image: req.file.filename}
      }
      const newPost = new Post(newPostObj);
      
      // const nsfw = model(req.file.filename);
      // if(nsfw)
      // {
      //   return res.status(400).json({msg:'NSFW!!!'})
      // }
      const post = await newPost.save();

      tags.forEach(async (tag)=> {
        let result = await Tag.find({"name": tag});

        if(result.length>0){
          result.unshift(post._id)
          console.log(13);
        }else {
          const tagObj = new Tag({
            name: tag,
            posts: [
              {
                post: post._id,
              }
            ]
          })
          console.log(12);
          console.log(tagObj);
          await tagObj.save();
        }
      })
      // console.log(post);
      return res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     GET api/posts
// @desc      Get all posts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({date: -1});
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/posts/college/:college_name
// @desc      Get all posts by college
// @access    Private

router.get('/college/:college_name', auth, async(req,res)=>{

  try {
    const posts = await Post.find({'college':req.params.college_name}).sort({date: -1});
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
})

// @route     GET api/posts/nsfw/:isNsfw
// @desc      Get all posts by nsfw
// @access    Private

router.get('/nsfw/:isNsfw', auth, async(req,res)=>{

  try {
    let posts;
    if(req.params.isNsfw===true || req.params.isNsfw==="true"){
      posts = await Post.find({ "nsfw": { "$in": ["true",true] } })

    }else {
      posts = await Post.find({ "nsfw": { "$in": ["false",false] } })
    }
    //  posts = await Post.find({'nsfw':req.params.college_name}).sort({date: -1});
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
})
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

    // Check if the post has already been reported
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
