const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    _id: ID
    username: String
    email: String
    token: String
  }
  type Query {
    getUsers: [User]
  }

  input SignUpInput {
    username: String
    email: String
    password: String
  }

  input SignInInput {
    email: String
    password: String
  }

  type Mutation {
    signUp(signUpInput: SignUpInput): User
    signIn(signInInput: SignInInput): User
  }
`;
