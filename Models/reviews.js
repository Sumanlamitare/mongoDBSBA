const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema(
  {
    review_id: Number,
    game: { type: String, required: true },
    rating: { type: Number, required: true },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

reviewsSchema.index({ review_id: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewsSchema);

module.exports = Review;
