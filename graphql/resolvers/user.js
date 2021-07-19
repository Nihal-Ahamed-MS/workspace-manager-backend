const User = require("../../models/user");

module.exports = {
  Query: {
    async getUsers(parent, args, context) {
      try {
        const user = await User.find();
        return user;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    async createWorkSpace(
      parent,
      { userId, workspaceName, workspaceType },
      context,
      info
    ) {
      context.workspace.push({ workspaceName, workspaceType });
      return await context.save();
    },
    async createBoard(parent, { boardName, workspaceId }, context, info) {
      context.workspace.id(workspaceId).boards.push({ boardName });
      return await context.save();
    },
  },
};
