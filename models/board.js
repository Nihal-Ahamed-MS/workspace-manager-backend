const mongoose = require("mongoose");
const { Schema } = mongoose;

// const ListOfCardSchema = new Schema({
//   listName: {
//     type: String,
//     trime: true,
//   },
// });

// const ListOfCard = mongoose.model("ListOfCard", ListOfCardSchema);

var boardSchema = new Schema({
  boardName: {
    type: String,
    required: true,
    trim: true,
  },
  visibility: {
    type: String,
    required: true,
    enum: ["PRIVATE", "WORKSPACE", "PUBLIC"],
  },
  // listOfCards: [ListOfCard],
});

module.exports = boardSchema;
