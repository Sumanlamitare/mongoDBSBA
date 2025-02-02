const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema(
  {
    game_id: Number,
    games: { type: String, required: true },
    genre: { type: String, default: "Unknown" },
    playedBy: Array,
  },
  {
    versionKey: false,
  }
);

gamesSchema.index({ game_id: 1 }, { unique: true });

const Game = mongoose.model("Game", gamesSchema);

module.exports = Game;
