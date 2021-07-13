const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Query {
    getUsers: [User]
  }
`;
