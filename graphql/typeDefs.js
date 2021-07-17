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
    boards: [Boards]
  }

  type Boards {
    boardName: String
    listOfCards: [ListOfCards]
  }

  type ListOfCards {
    listName: String
    cardList: [Card]
  }

  type Card {
    cardName: String
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
    createWorkSpace(
      userId: ID
      workspaceName: String
      workspaceType: String
    ): User
    createBoard(userId: ID, boardName: String, workspaceId: ID): User
  }
`;
