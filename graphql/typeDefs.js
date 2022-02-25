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
    imageUrl: String
    listOfCards: [ListOfCards]
  }

  type ListOfCards {
    _id: ID
    listName: String
    cardList: [Card]
  }

  type ListOfDueCards {
    _id: ID
    cardName: String
    cardDesc: String
    startDate: String
    endDate: String
    isCompleted: Boolean
    workspaceId: String
    workspaceName: String
    boardId: String
  }

  type Card {
    _id: ID
    cardName: String
    cardDesc: String
    startDate: String
    endDate: String
    isCompleted: Boolean
    checkList: [CheckLists]
    comments: [commentLists]
    attachements: [attachementLists]
  }

  type CheckLists {
    _id: ID
    checkListName: String
    isChecked: Boolean
  }

  type commentLists {
    commentAuthorId: String
    commentAuthor: String
    commentDesc: String
  }

  type attachementLists {
    attachmentUrl: String
    attachmentTitle: String
    attachmentDesc: String
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
    boardId: String
    boardName: String
    imageUrl: String
    listOfCards: [createBoardListOfCards]
  }

  input createBoardListOfCards {
    _id: String
    listName: String
    cardList: [createBoardListofCardList]
  }

  input createBoardListofCardList {
    _id: String
    cardName: String
    cardDesc: String
    startDate: String
    endDate: String
    isCompleted: Boolean
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
    startDate: String
    endDate: String
    isCompleted: Boolean
    cardId: String
  }

  input AddCardDescInput {
    workspaceId: String
    boardId: String
    cardListId: String
    cardId: String
    cardDesc: String
  }

  input AddCardDateInput {
    workspaceId: String
    boardId: String
    cardListId: String
    startDate: String
    cardId: String
    endDate: String
  }

  input AddCardCheckListInput {
    workspaceId: String
    boardId: String
    cardListId: String
    checkListId: String
    checkListName: String
    cardId: String
    isChecked: Boolean
  }

  input AddCardAttachementInput {
    workspaceId: String
    boardId: String
    cardListId: String
    cardId: String
    attachmentUrl: String
    attachmentTitle: String
    attachmentDesc: String
  }

  input AddCardCommentInput {
    workspaceId: String
    boardId: String
    cardListId: String
    cardId: String
    commentAuthorId: String
    commentAuthor: String
    commentDesc: String
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
    getDueCard: [ListOfDueCards]
  }

  type Mutation {
    signUp(signUpInput: SignUpInput): User
    signIn(signInInput: SignInInput): User
    createWorkSpace(createWorkSpaceInput: CreateWorkSpaceInput): User
    createBoard(createBoardInput: CreateBoardInput): User
    createCardList(createCardListInput: CreateCardListInput): Board
    createCard(createCardInput: CreateCardInput): Board
    addCardDesc(addCardDesc: AddCardDescInput): User
    addCardDate(addCardDate: AddCardDateInput): User
    addCardComment(addCardComment: AddCardCommentInput): User
    addCardAttachement(addCardAttachement: AddCardAttachementInput): User
    addCardCheckList(addCardCheckList: AddCardCheckListInput): CheckLists
  }
`;
