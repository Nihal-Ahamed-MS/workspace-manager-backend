const User = require("../../models/user");

module.exports = {
  Query: {
    async getUsers() {
      try {
        const user = await User.find();
        return user;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
