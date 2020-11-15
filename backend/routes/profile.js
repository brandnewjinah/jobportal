const express = require("express");
const router = express.Router();
const passport = require("passport");
const checkAuth = passport.authenticate("jwt", { session: false });
const profileModel = require("../models/profile");

// creating profile
// @route POST http://localhost:5000/profile
// @desc Register user profile
// @access Private

router.post("/", checkAuth, (req, res) => {
  const profileFields = {};

  profileFields.user = req.user.id; //from checkAuth
  if (req.body.handle) profileFields.handle = req.body.handle;

  if (typeof req.body.skills !== "undefined") {
    profileFields.skills = req.body.skills.split(",");
  }

  //find matching user profile
  profileModel
    .findOne({ user: req.user.id })
    .then((profile) => {
      if (profile) {
        return res.json({
          message: "Profile already exists. Please update profile",
        });
      } else {
        // if no profile, post new profile
        new profileModel(profileFields)
          .save()
          .then((profile) => res.json(profile))
          .catch((err) => res.status(408).json(err));
      }
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/", checkAuth, (req, res) => {
  profileModel
    .findOne({ user: req.user.id })
    .then((profile) => {
      if (!profile) {
        return res.json({
          message: "Profile doesn't exist",
        });
      } else {
        res.json(profile);
      }
    })
    .catch((err) => res.status(500).json(err));
});

// @route DELETE http://localhost:5000/profile
// @desc delete current user profile
// @access Private

router.delete("/", checkAuth, (req, res) => {
  profileModel
    .findOneAndDelete({ user: req.user.id })
    .then((profile) => {
      if (!profile) {
        return res.json({
          message: "Please create profile first",
        });
      } else {
        res.json({
          message: "Deleted your profile",
        });
      }
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

module.exports = router;
