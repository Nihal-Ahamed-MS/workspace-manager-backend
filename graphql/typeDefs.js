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
    _id: ID
    workspaceName: String
    workspaceType: String
    boards: [Board]
  }

  type Board {
    _id: ID
    boardName: String
    listOfCards: [ListOfCards]
  }

  type ListOfCards {
    _id: ID
    listName: String
    cardList: [Card]
  }

  type Card {
    _id: ID
    cardName: String
    cardDesc: String
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

  input CreateWorkSpaceInput {
    workspaceName: String
    workspaceType: String
  }

  input CreateBoardInput {
    workspaceId: String
    boardName: String
  }

  input CreateCardListInput {
    workspaceId: String
    boardId: String
    listName: String
  }

  input CreateCardInput {
    workspaceId: String
    boardId: String
    cardListId: String
    cardName: String
    cardDesc: String
  }

  enum Visibility {
    PRIVATE
    WORKSPACE
    PUBLIC
  }

  input GetBoardInput {
    workspaceId: String
    boardId: String
  }

  type Query {
    getUser: User
    getBoard(getBoardInput: GetBoardInput): Board
  }

  type Mutation {
    signUp(signUpInput: SignUpInput): User
    signIn(signInInput: SignInInput): User
    createWorkSpace(createWorkSpaceInput: CreateWorkSpaceInput): User
    createBoard(createBoardInput: CreateBoardInput): Board
    createCardList(createCardListInput: CreateCardListInput): User
    createCard(createCardInput: CreateCardInput): User
  }
`;
