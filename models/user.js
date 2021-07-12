const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

var userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    encrypted_password: {
      type: String,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);

userSchema.virtual(password).set(function (password) {
  this.salt = v4();
  this.encrypted_password = this.securePassword(password);
});

userSchema.methods = {
  authenticate: function (plainPassword) {
    return this.securePassword(plainPassword) === this.encrypted_password;
  },

  securePassword: function (plainPassword) {
    if (!plainPass) {
      try {
        return crypto
          .createHmac("sha256", this.salt)
          .update(plainPassword)
          .digest("hex");
      } catch (err) {
        console.log(err);
        return "";
      }
    }
  },
};

module.exports = mongoose.model("User", userSchema);
