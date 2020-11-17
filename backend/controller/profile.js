const profileModel = require("../models/profile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

// creating profile
// @route POST http://localhost:5000/profile
// @desc Register user profile
// @access Private

exports.profile_create = (req, res) => {
  const profileFields = {};

  profileFields.user = req.user.id; //from checkAuth
  if (req.body.handle) profileFields.handle = req.body.handle;

  if (typeof req.body.interests !== "undefined") {
    // profileFields.interests = req.body.interests.split(",");
    profileFields.interests = req.body.interests;
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
};

exports.profile_get_all = (req, res) => {
  profileModel
    .find()
    .then((profiles) => {
      res.json({
        message: "All profiles",
        profiles: profiles.map((profile) => {
          return {
            id: profile._id,
            user: profile.user,
            interests: profile.interests,
            request: {
              type: "GET",
              url: "http://localhost:5000/profile/" + profile._id,
            },
          };
        }),
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

exports.profile_get_each = (req, res) => {
  const id = req.params.profileId;
  profileModel
    .findById(id)
    .then((profile) => {
      if (!profile) {
        return res.json({
          message: "Profile doesn't exist",
        });
      } else {
        res.json(profile);
      }
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

exports.profile_delete_each = (req, res) => {
  const id = req.params.profileId;

  profileModel
    .findByIdAndDelete(id)
    .then((profile) => {
      res.json({
        message: "Deleted profile",
        request: {
          type: "GET",
          url: "http://localhost:5000/profile",
        },
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};
