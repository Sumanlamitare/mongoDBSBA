const express = require("express");
const router = express.Router();

const Review = require("../Models/reviews");

router.get("/reviews", async (req, res) => {
  const result = await Review.find();

  res.status(200).json({
    message: "Here are all the reviews",
    reviews: result,
  });
});

router.post("/reviews", async (req, res) => {
  let result = await Review.findOne().sort({ _id: -1 });
  if (result) {
    req.body.review_id = result.review_id + 1;
  } else {
    req.body.review_id = 1;
  }
  await User.create(req.body);
  res.status(200).send("Reviews Created");
});

module.exports = router;
