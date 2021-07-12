const mongoose = require("mongoose");
const { Schema } = mongoose;

var boardSchema = new Schema({
  boardName: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = boardSchema;
