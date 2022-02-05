const mongoose = require("mongoose");
const { Schema } = mongoose;
const Card = require("./card");

const ListOfCards = new Schema({
  listName: {
    type: String,
    trim: true,
  },
  cardList: [Card],
});

var boardSchema = new Schema({
  boardName: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
  },
  visibility: {
    type: String,
    enum: ["PRIVATE", "WORKSPACE", "PUBLIC"],
  },
  listOfCards: [ListOfCards],
});

module.exports = boardSchema;
