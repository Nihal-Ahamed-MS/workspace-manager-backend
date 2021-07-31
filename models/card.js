const mongoose = require("mongoose");
const { Schema } = mongoose;

var cardShema = Schema(
  {
    cardName: {
      type: String,
      trim: true,
      required: true,
    },
    cardDesc: {
      type: String,
      trim: true,
    },
  },
  { timestamp: true }
);

module.exports = cardShema;
