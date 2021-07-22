const jwt = require("jsonwebtoken");
const User = require("../models/user");
module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(`Bearer  `)[1];
    if (token) {
      try {
        const auth = jwt.verify(token, process.env.SECRET);
        return auth;
      } catch (err) {
        return err;
      }
    }
  } else {
    return { err: "Authorization token must be provided" };
  }

  return { err: "Authorization header must be provided" };
};
