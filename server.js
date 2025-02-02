const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./Models/users.js");
const db = require("./MongoDb/conn.js");
const Review = require("./Models/reviews.js");

const userRoute = require("./routes/userRoute.js");
const gameRoute = require("./routes/gameRoute");
const reviewRoute = require("./routes/reviewRoutes.js");

//connect the database

// mongoose.connect(process.env.MONGODB_URI);
// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB " + mongoose.connection.name);
// });
function addSampleData() {
  let review = Review.find();
  if (!review) {
    const reviews = [
      { review_id: 1, game: "FIFA", rating: 5 },
      { review_id: 2, game: "NBA", rating: 5 },
      { review_id: 3, game: "NFL", rating: 5 },
      { review_id: 4, game: "Golf", rating: 5 },
      { review_id: 5, game: "FIFA", rating: 5 },
    ];

    Review.insertMany(reviews);
  }
}
addSampleData();
app.use(express.json());

//get routes
app.get("/", (req, res) => {
  res.send("Welcome to the Video Games Hub");
});

app.use("/", userRoute);
app.use("/", gameRoute);
app.use("/", reviewRoute);
//server
app.listen(PORT, () => {
  console.log("Server running  on PORT: " + PORT);
});
