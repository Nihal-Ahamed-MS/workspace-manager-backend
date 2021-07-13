const userResolver = require("./user");

module.exports = {
  Query: {
    ...userResolver.Query,
  },
};
