const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../../models/User");
const Settings = require("../../models/Settings");
const nodemailer = require("nodemailer");

const sendEmail = require("../../utils/email");
const Token = require("../../models/Token");
const crypto = require("crypto");

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
  "/",
  [
    check("username", "Please enter a username").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, college } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ username });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Generate random avatar
      const avatar = `https://avatars.dicebear.com/api/croodles/${username}.svg`;

      user = new User({
        username,
        email,
        password,
        avatar,
        college,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      BASE_URL = "http://localhost:5000";
      let token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();

      const message = `${BASE_URL}/api/users/verify/${user.id}/${token.token}`;
      await sendEmail(user.email, "Verify Email", message);

      // Get id of the user
      const currUser = await User.findOne({ username });
      const { id } = currUser;

      // Instantiate settings for registering user
      const settings = new Settings({ user: user._id });
      await settings.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/verify/:id/:token", async (req, res) => {
  try {
    console.log("entered");
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send("Invalid link");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link");

    await User.findOneAndUpdate({ _id: user._id }, { verified: true });
    await Token.findByIdAndRemove(token._id);

    res.send("email verified sucessfully");
  } catch (error) {
    console.log(error);
    res.status(400).send("An error occured");
  }
});

// @route     PUT api/users/:user_id
// @desc      Update user password
// @access    Private
router.put(
  "/:user_id",
  [
    auth,
    [
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.user.id !== req.params.user_id) {
      return res.status(400).json({ errors: [{ msg: "Not Authorized" }] });
    }

    let { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.user_id },
        { password: password },
        { new: true }
      );

      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
