const mongoose = require("mongoose");
const { Schema } = mongoose;

var cardShema = Schema({
  cardName: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = cardShema;
