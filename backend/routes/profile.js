const express = require("express");
const router = express.Router();
const passport = require("passport");
const checkAuth = passport.authenticate("jwt", { session: false });
const profileModel = require("../models/profile");

const {
  profile_create,
  profile_get_all,
  profile_get_each,
  profile_delete_each,
} = require("../controller/profile");

router.post("/", checkAuth, profile_create);
router.get("/", profile_get_all);
router.get("/:profileId", profile_get_each);
router.delete("/:profileId", profile_delete_each);

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
