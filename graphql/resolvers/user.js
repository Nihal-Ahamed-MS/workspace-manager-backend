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
    async createBoard(parent, { boardName, workspaceId }, { user }, info) {
      user.workspace.id(workspaceId).boards.push({ boardName });
      return await user.save();
    },
  },
};
