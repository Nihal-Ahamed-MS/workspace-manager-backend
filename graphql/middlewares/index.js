const User = require("../../models/user");

const getPostMiddleware = async (resolve, parent, args, context, info) => {
  const result = await resolve(parent, args, context, info);
  console.log(result);
  return result;
};

const getUserById = async (resolve, parent, args, context, info) => {
  const {
    createWorkSpaceInput: { userId, workspaceName, workspaceType },
  } = args;
  const user = await User.findById(userId).exec();
  context = user;
  const result = await resolve(parent, args, context, info);
  return result;
};

module.exports = {
  Query: {
    getUsers: getPostMiddleware,
  },
  Mutation: {
    createWorkSpace: getUserById,
  },
};
