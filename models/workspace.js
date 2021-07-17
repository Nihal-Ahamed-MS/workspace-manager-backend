const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;
const Board = require("./board");

var workspaceSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  workspaceName: {
    type: String,
    trim: true,
    required: true,
  },
  workspaceType: {
    type: String,
    trime: true,
    reuqired: true,
  },
  boards: [Board],
});

module.exports = workspaceSchema;
