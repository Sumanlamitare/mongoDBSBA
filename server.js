const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./Models/users.js");
const db = require("./MongoDb/conn.js");
const Review = require("./Models/reviews.js");
const Game = require("./Models/games.js");

const userRoute = require("./routes/userRoute.js");
const gameRoute = require("./routes/gameRoute");
const reviewRoute = require("./routes/reviewRoutes.js");

//connect the database

// mongoose.connect(process.env.MONGODB_URI);
// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB " + mongoose.connection.name);
// });

async function addSampleData() {
  let review = await Review.countDocuments();
  let game = await Review.countDocuments();
  let user = await User.countDocuments();
  if (review === 0) {
    console.log("Reviews is empty");

    const reviews = [
      { review_id: 1, game: "FIFA", rating: 5 },
      { review_id: 2, game: "NBA", rating: 5 },
      { review_id: 3, game: "NFL", rating: 5 },
      { review_id: 4, game: "Golf", rating: 5 },
      { review_id: 5, game: "FIFA", rating: 5 },
    ];

    await Review.insertMany(reviews);
    console.log("Review Data Inserted");
  }
  if (user === 0) {
    const users = [
      {
        user_id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        fav_games: ["FIFA", "NBA"],
      },
      {
        user_id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        fav_games: ["NFL", "Golf"],
      },
      {
        user_id: 3,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        fav_games: ["FIFA", "Golf"],
      },
      {
        user_id: 4,
        name: "David Williams",
        email: "david.williams@example.com",
        fav_games: ["NBA", "NFL"],
      },
      {
        user_id: 5,
        name: "Emma Davis",
        email: "emma.davis@example.com",
        fav_games: ["FIFA", "NFL", "Golf"],
      },
    ];

    await User.insertMany(users);
    console.log("User Data Inserted");
  }

  if (game === 0) {
    const games = [
      {
        game_id: 1,
        title: "FIFA",
        genre: "Sports",
        playedBy: ["Not available in sample data"],
      },
      {
        game_id: 2,
        title: "NBA",
        genre: "Sports",
        playedBy: ["Not available in sample data"],
      },
      {
        game_id: 3,
        title: "NFL",
        genre: "Sports",
        playedBy: ["Not available in sample data"],
      },
      {
        game_id: 4,
        title: "Golf",
        genre: "Sports",
        playedBy: ["Not available in sample data"],
      },
      {
        game_id: 5,
        title: "Tennis",
        genre: "Sports",
        playedBy: ["Not available in sample data"],
      },
    ];
    await Game.insertMany(games);
    console.log("Game data entered");
  }
}

addSampleData();

app.use(express.json());

//get routes
app.get("/", (req, res) => {
  const date = new Date();
  res.json({
    app_title: "Video Game Hub",
    author: "Suman Lamitare",
    instruction:
      "Go to /user to get all the user data. /user/id to get specific id. Follow the same format for reviews and games data",
    date: date.toLocaleString(),
  });
});
//error handling middleware

app.use((err, req, res, next) => {
  if (err.message) {
    // err.status = 500;
    res.json({
      Status: `This is the status code ${err.status}. `,
      error: err.message,
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.originalUrl} not found`,
    status: 404,
  });
});
app.use("/", userRoute);
app.use("/", gameRoute);
app.use("/", reviewRoute);
//server
app.listen(PORT, () => {
  console.log("Server running  on PORT: " + PORT);
});
