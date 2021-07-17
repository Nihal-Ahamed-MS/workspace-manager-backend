const mongoose = require("mongoose");
const { Schema } = mongoose;
const card = require("./card");

const listOfCardSchema = new Schema({
  listName: {
    type: String,
    trime: true,
  },
  cardList: [card],
});

var boardSchema = new Schema({
  boardName: {
    type: String,
    required: true,
    trim: true,
  },
  visibility: {
    type: String,
    enum: ["PRIVATE", "WORKSPACE", "PUBLIC"],
  },
  listOfCards: [listOfCardSchema],
});

module.exports = boardSchema;
