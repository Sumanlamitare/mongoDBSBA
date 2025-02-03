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

router.get("/reviews/:id", async (req, res) => {
  const response = await Review.findOne({ review_id: req.params.id });

  if (response) {
    res.status(200).json({
      message: "The review with id " + req.params.id,
      review: response,
    });
  } else {
    res.json({
      message: "Could find the review with Id " + req.params.id,
    });
  }
});

router.post("/reviews", async (req, res) => {
  let result = await Review.findOne().sort({ _id: -1 });
  if (result) {
    req.body.review_id = result.review_id + 1;
  } else {
    req.body.review_id = 1;
  }
  await Review.create(req.body);
  res.status(200).send("Reviews Created");
});

router.patch("/reviews/:id", async (req, res) => {
  let result = await Review.findOne({ review_id: req.params.id });
  if (result) {
    await Review.findOneAndUpdate({ review_id: req.params.id }, req.body);
    res.status(200).json({
      message: "Review has been updated",
      update: req.body,
    });
  }
});

router.delete("/reviews/:id", async (req, res) => {
  let result = await Review.findOne({ review_id: req.params.id });
  if (result) {
    await Review.findOneAndDelete({ review_id: req.params.id });
    res.status(200).json({
      message: "Review with Id " + req.params.id + " has been deleted",
    });
  } else {
    res.json({
      message: "Could not find the review with id " + req.params.id,
    });
  }
});

module.exports = router;
