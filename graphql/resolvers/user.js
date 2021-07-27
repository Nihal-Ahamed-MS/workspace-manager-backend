const User = require("../../models/user");

module.exports = {
  Query: {
    async getUser(parent, args, context) {
      return context.user;
    },
  },
  Mutation: {
    async createWorkSpace(
      parent,
      { createWorkSpaceInput: { workspaceName, workspaceType } },
      { user },
      info
    ) {
      user.workspace.push({ workspaceName, workspaceType });
      return await user.save();
    },
    async createBoard(
      parent,
      { createBoardInput: { boardName, workspaceId } },
      { user },
      info
    ) {
      user.workspace.id(workspaceId).boards.push({ boardName });
      return await user.save();
    },
    async createCardList(
      parent,
      { createCardListInput: { workspaceId, boardId, listName } },
      { user },
      info
    ) {
      user.workspace
        .id(workspaceId)
        .boards.id(boardId)
        .listOfCards.push({ listName });

      return await user.save();
    },

    async createCard(
      parent,
      { createCardInput: { workspaceId, boardId, cardListId, cardName } },
      { user },
      info
    ) {
      user.workspace
        .id(workspaceId)
        .boards.id(boardId)
        .listOfCards.id(cardListId)
        .cardList.push({ cardName });

      return await user.save();
    },
  },
};
