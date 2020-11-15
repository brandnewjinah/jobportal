const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    handle: {
      type: String,
      required: true,
      max: 40,
    },
    interest: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", profileSchema);
