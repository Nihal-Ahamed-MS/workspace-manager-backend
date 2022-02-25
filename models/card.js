const mongoose = require("mongoose");
const { Schema } = mongoose;

const checkListSchema = new Schema({
  checkListName: {
    type: String,
    trim: true,
  },
  isChecked: {
    type: Boolean,
  },
});

const commentsListSchema = new Schema({
  commentAuthorId: {
    type: String,
    trim: true,
  },
  commentAuthor: {
    type: String,
    trim: true,
  },
  commentDesc: {
    type: String,
    trim: true,
  },
});

const attachementsListSchema = new Schema({
  attachmentUrl: {
    type: String,
  },
  attachmentTitle: {
    type: String,
    trim: true,
  },
  attachmentDesc: {
    type: String,
    trim: true,
  },
});

var cardShema = Schema(
  {
    cardName: {
      type: String,
      required: true,
    },
    cardDesc: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
    },
    checkList: [checkListSchema],
    comments: [commentsListSchema],
    attachements: [attachementsListSchema],
  },
  { timestamp: true }
);

module.exports = cardShema;
