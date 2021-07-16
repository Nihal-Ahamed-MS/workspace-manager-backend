const userResolver = require("./user");
const authResolver = require("./auth");

module.exports = {
  Query: {
    ...userResolver.Query,
  },
  Mutation: {
    ...authResolver.Mutation,
  },
};
