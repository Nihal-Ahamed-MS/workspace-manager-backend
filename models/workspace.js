const mongoose = require("mongoose");
const { Schema } = mongoose;
const Board = require("./board");

var workspaceSchema = new Schema({
  workspaceName: {
    type: String,
    trim: true,
    require: true,
  },
  boards: [Board],
});

module.exports = workspaceSchema;
