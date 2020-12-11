const express = require("express");
const router = express.Router();
const passport = require("passport");
const checkAuth = passport.authenticate("jwt", { session: false });
const profileModel = require("../models/profile");

const {
  profile_create,
  profile_update,
  profile_get_all,
  profile_get_each,
  profile_delete_each,
} = require("../controller/profile");

router.post("/", checkAuth, profile_create);
router.get("/", profile_get_all);
router.get("/:profileId", profile_get_each);
router.delete("/:profileId", profile_delete_each);

module.exports = router;
