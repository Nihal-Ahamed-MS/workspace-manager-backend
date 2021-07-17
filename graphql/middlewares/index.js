const User = require("../../models/user");

const getPostMiddleware = async (resolve, parent, args, context, info) => {
  const result = await resolve(parent, args, context, info);
  console.log(result);
  return result;
};

const getUserById = async (resolve, parent, args, context, info) => {
  const user = await User.findById(args.userId).exec();
  context = user;
  const result = await resolve(parent, args, context, info);
  return result;
};

const getWorkspace = async (resovle, parent, args, context, info) => {
  const user = await getUserById(resovle, parent, args, context, info);
  return user;
};

module.exports = {
  Query: {
    getUsers: getPostMiddleware,
  },
  Mutation: {
    createWorkSpace: getUserById,
    createBoard: getWorkspace,
  },
};
