const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

var boardSchema = new Schema({
  boardName: {
    type: String,
    required: true,
    trim: true,
  },
});

moduel.exports = boardSchema;
