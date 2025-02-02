const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id: Number,
    name: { type: String, required: true },
    email: String,
    fav_games: { type: Array, default: ["No favorite games added"] },
    date_joined: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

userSchema.index({ user_id: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
