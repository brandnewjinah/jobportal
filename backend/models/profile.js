const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "user",
    //   required: true,
    // },
    handle: {
      type: String,
      max: 40,
    },
    interests: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", profileSchema);
