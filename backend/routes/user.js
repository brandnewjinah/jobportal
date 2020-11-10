const express = require("express");
const router = express.Router();

const { user_signup, user_all } = require("../controller/user");

//create
router.post("/signup", user_signup);

//get
router.get("/", user_all);

module.exports = router;
