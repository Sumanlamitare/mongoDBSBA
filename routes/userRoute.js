const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../Models/users.js");

//routes for user collections

router.get("/users", async (req, res) => {
  let result = await User.find().sort({ _id: 1 });
  //   let response = result.json();

  res.json({
    message: "Here are all the user in the user collection",
    users: result,
  });
});

router.get("/users/:id", async (req, res) => {
  let userID = req.params.id;
  let response = await User.findOne({ user_id: userID });

  res.json({
    message: `User with User ID ${userID} `,
    user: response,
  });
});

router.post("/users", async (req, res) => {
  let result = await User.findOne().sort({ _id: -1 });
  if (result) {
    req.body.user_id = result.user_id + 1;
  } else {
    req.body.user_id = 1;
  }
  await User.create(req.body);
  res.status(200).send("User Created");
});

router.patch("/users/:id", async (req, res) => {
  let userID = req.params.id;
  const response = await User.findOne({ user_id: userID });
  if (response) {
    await User.findOneAndUpdate({ user_id: userID }, req.body, { new: true });
    res.status(200).json({
      message: `User with ID: ${userID} has been updated`,
      updated: req.body,
    });
  } else {
    res.status(404).send(`Unable to find the user with ID: ${userID}`);
  }
});

router.delete("/users/:id", async (req, res) => {
  let userID = req.params.id;
  let response = await User.findOne({ user_id: userID });
  if (response) {
    await User.findOneAndDelete({ user_id: userID });
    res.status(200).json({
      message: `User with ID ${userID} has been deleted`,
    });
  } else {
    res.send(`Unable to find user with Id ${userID}`);
  }
});

module.exports = router;
