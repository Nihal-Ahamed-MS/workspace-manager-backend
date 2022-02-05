const User = require("../../models/user");
const isAuthenticated = require("../../utils/isAuthenticated");

const getUserMiddleware = async (resolve, parent, args, context, info) => {
  if (context.isUserAuthenticated._id) {
    const result = await resolve(parent, args, context, info);
    return result;
  }
  return context.isAuthenticated;
};

const getUserById = async (resolve, parent, args, context, info) => {
  const { _id } = context.isUserAuthenticated;
  const user = await User.findById(_id).exec();
  context = { ...context, user: user };
  const result = await resolve(parent, args, context, info);
  return result;
};

module.exports = {
  Query: {
    getUser: getUserById,
    getBoard: getUserById,
  },
  Mutation: {
    createWorkSpace: getUserById,
    createBoard: getUserById,
    createCardList: getUserById,
    createCard: getUserById,
    addCardDesc: getUserById,
    addCardDate: getUserById,
    addCardComment: getUserById,
    addCardAttachement: getUserById,
    addCardCheckList: getUserById,
  },
};
