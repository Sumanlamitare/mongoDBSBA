const express = require("express");
const router = express.Router();

const Game = require("../Models/games");
const User = require("../Models/users");

//routes for games collection
router.get("/games", async (req, res) => {
  let response = await Game.find();

  res.status(200).json({
    message: "All the games inside the game collection are listed below.",
    games: response,
  });
});
//get by game name
router.get("/games/:id", async (req, res) => {
  let result = await Game.findOne({ game_id: req.params.id });

  res.status(200).json({
    message: `Games with name: ${req.params.id}`,
    games: result,
  });
});
router.post("/games", async (req, res) => {
  let result = await Game.findOne().sort({ _id: -1 });
  let user = await User.find();

  if (result) {
    req.body.game_id = result.game_id + 1;
  } else {
    req.body.game_id = 1;
  }
  let played_by = [];
  for (let i = 0; i < user.length; i++) {
    for (let z = 0; z < user[i].fav_games.length; z++) {
      if (user[i].fav_games[z] === req.body.title) {
        played_by.push(user[i].name);
      }
    }
  }
  if (played_by.length !== 0) {
    req.body.playedBy = played_by;
  } else {
    played_by = ["Could not find users who played this game"];
    req.body.playedBy = played_by;
  }

  await Game.create(req.body);

  res.status(200).send("Game Created");

  //   console.log(played_by);
});
router.patch("/games/:id", async (req, res) => {
  let gameID = req.params.id;
  const response = await Game.findOne({ game_id: gameID });
  if (response) {
    await Game.findOneAndUpdate({ game_id: gameID }, req.body, { new: true });
    res.status(200).json({
      message: `Game with ID: ${gameID} has been updated`,
      updated: req.body,
    });
  } else {
    res.status(404).send(`Unable to find the Game with ID: ${gameID}`);
  }
});

router.delete("/games/:id", async (req, res) => {
  let gameID = req.params.id;
  let response = await Game.findOne({ game_id: gameID });
  if (response) {
    await Game.findOneAndDelete({ game_id: gameID });
    res.status(200).json({
      message: `Game with ID ${gameID} has been deleted`,
    });
  } else {
    res.send(`Unable to find Game with Id ${gameID}`);
  }
});

module.exports = router;
