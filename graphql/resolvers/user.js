const User = require("../../models/user");

module.exports = {
  Query: {
    async getUser(parent, args, context) {
      return context.user;
    },
    async getDueCard(parent, args, { user }) {
      var arr = [];
      const current = new Date();
      const date = current.getDate();
      const month = current.getMonth() + 1;
      const year = current.getFullYear();

      const list = user.workspace.map((workspace) => {
        workspace.boards.map((board) => {
          board.listOfCards.map((list) => {
            list.cardList.map((card) => {
              if (card.endDate) {
                var dueDate = card.endDate.split("-");

                if (
                  dueDate[0] >= year &&
                  dueDate[1] >= month &&
                  dueDate[2] >= date
                ) {
                  var res = {
                    _id: card._id,
                    cardName: card.cardName,
                    cardDesc: card.cardDesc,
                    startDate: card.startDate,
                    endDate: card.endDate,
                    isCompleted: card.isCompleted,
                    workspaceId: workspace.id,
                    workspaceName: workspace.workspaceName,
                    boardId: board.id,
                  };
                  arr.push(res);
                }
              }
            });
          });
        });
      });

      await Promise.all(list);
      return arr;
    },

    async getBoard(
      parent,
      { getBoardInput: { workspaceId, boardId } },
      { user }
    ) {
      // console.log(user.workspace.id(workspaceId).boards.id(boardId));
      return user.workspace.id(workspaceId).boards.id(boardId);
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
      {
        createBoardInput: {
          boardName,
          imageUrl,
          workspaceId,
          boardId,
          listOfCards,
        },
      },
      { user },
      info
    ) {
      if (boardId === " ") {
        const board = user.workspace.id(workspaceId).boards;
        board.push({ boardName, imageUrl });
        return await user.save();
      } else {
        user.workspace
          .id(workspaceId)
          .boards.id(boardId)
          .set({ boardName, imageUrl, listOfCards });
        return await user.save();
      }

      // return board[board.length - 1];
    },
    async createCardList(
      parent,
      { createCardListInput: { workspaceId, boardId, listName } },
      { user },
      info
    ) {
      const cardList = user.workspace
        .id(workspaceId)
        .boards.id(boardId).listOfCards;
      cardList.push({ listName });

      await user.save();
      return user.workspace.id(workspaceId).boards.id(boardId);
    },

    async createCard(
      parent,
      {
        createCardInput: {
          workspaceId,
          boardId,
          cardListId,
          cardName,
          cardDesc,
          startDate,
          isCompleted,
          cardId,
          endDate,
        },
      },
      { user },
      info
    ) {
      const card = user.workspace
        .id(workspaceId)
        .boards.id(boardId)
        .listOfCards.id(cardListId).cardList;

      if (cardId === " ") {
        card.push({ cardName, cardDesc, startDate, endDate, isCompleted });
      } else {
        card
          .id(cardId)
          .set({ cardName, cardDesc, startDate, endDate, isCompleted });
      }

      await user.save();
      return user.workspace.id(workspaceId).boards.id(boardId);
    },

    async addCardDesc(
      parent,
      { addCardDesc: { workspaceId, boardId, cardListId, cardId, cardDesc } },
      { user },
      info
    ) {
      const card = user.workspace
        .id(workspaceId)
        .boards.id(boardId)
        .listOfCards.id(cardListId)
        .cardList.id(cardId);
      card.set({ cardDesc });

      return await user.save();
    },

    async addCardDate(
      parent,
      {
        addCardDate: {
          workspaceId,
          boardId,
          cardListId,
          cardId,
          startDate,
          endDate,
        },
      },
      { user },
      info
    ) {
      const card = user.workspace
        .id(workspaceId)
        .boards.id(boardId)
        .listOfCards.id(cardListId)
        .cardList.id(cardId);
      card.set({ startDate, endDate });

      return await user.save();
    },

    async addCardCheckList(
      parent,
      {
        addCardCheckList: {
          workspaceId,
          boardId,
          cardListId,
          cardId,
          checkListName,
          isChecked,
          checkListId,
        },
      },
      { user },
      info
    ) {
      const cardCheckList = user.workspace
        .id(workspaceId)
        .boards.id(boardId)
        .listOfCards.id(cardListId)
        .cardList.id(cardId).checkList;

      if (checkListId === "") {
        cardCheckList.push({ checkListName, isChecked });
      } else {
        cardCheckList.id(checkListId).set({ isChecked });
      }

      await user.save();
      return cardCheckList[cardCheckList.length - 1];
    },
  },
};
