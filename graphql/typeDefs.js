const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    _id: ID
    username: String
    email: String
    token: String
    workspace: [Workspace]
  }

  type Workspace {
    workspaceName: String
    workspaceType: String
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

  input CreateWorksSpaceInput {
    userId: ID
    workspaceName: String
    workspaceType: String
  }

  enum Visibility {
    PRIVATE
    WORKSPACE
    PUBLIC
  }

  type Mutation {
    signUp(signUpInput: SignUpInput): User
    signIn(signInInput: SignInInput): User
    createWorkSpace(createWorkSpaceInput: CreateWorksSpaceInput): User
  }
`;
