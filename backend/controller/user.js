const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//signup
exports.user_signup = (req, res) => {
  const { name, email, password } = req.body;

  userModel
    .findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(400).json({
          error: "Email is already being used",
        });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const token = jwt.sign({ name, email }, "secret", {
              expiresIn: "1d",
            });
            const user = new userModel({
              name,
              email,
              password: hash,
            });

            user
              .save()
              .then((user) => {
                res.status(200).json({
                  message: "User registered",
                  userInfo: { name, email, password: hash, token },
                });
              })
              .catch((err) => {
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    })
    .catch((err) => {
      message: err.message;
    });
};

//get all users
exports.user_all = (req, res) => {
  userModel
    .find()
    .then((users) => {
      res.json({
        message: "All users",
        count: users.length,
        users: users.map((user) => {
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            request: {
              type: "GET",
              url: "http://localhost:5000/user/" + user._id,
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
