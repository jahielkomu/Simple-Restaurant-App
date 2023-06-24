const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: {
      type: String, //enforces tittle to be a string
      required: true, //the tittle is required
    },
    cousine: {
      type: String, //type of cusine
      required: true,
    },
    location: {
      type: String, //
      required: true,
    },
    Image: {
      type: String, // after converting to base four
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
