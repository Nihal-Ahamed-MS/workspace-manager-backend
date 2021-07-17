const User = require("../../models/user");

module.exports = {
  Query: {
    async getUsers() {
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
      { createWorkSpaceInput: { userId, workspaceName, workspaceType } },
      context,
      info
    ) {
      console.log(context);
      const user = await User.findById(userId).exec();
      context.workspace.push({ workspaceName, workspaceType });
      return await context.save();
    },
  },
};
