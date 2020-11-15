const profileModel = require("../models/profile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//signup
exports.profile_create = (req, res) => {
  console.log(req.user);
  //   profileFields.user = req.user.id;
  //   if (typeof req.body.interest !== "undefined") {
  //     profileFields.interest = req.body.interest.split(",");
  //   }

  //   profileModel
  //     .findOne({ user: req.user.id })
  //     .then((profile) => {
  //       if (profile) {
  //         return res.json({
  //           message: "Profile already exists.",
  //         });
  //       } else {
  //         new profileModel(profileFields)
  //           .save()
  //           .then((profile) => res.json(profile))
  //           .catch((err) =>
  //             res.status(408).json({
  //               message: err,
  //             })
  //           );
  //       }
  //     })
  //     .catch((err) => res.status(500).json(err));
};
