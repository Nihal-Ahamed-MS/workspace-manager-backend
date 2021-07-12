const User = require("../models/user");

exports.getUser = (req, res) => {
  const user = new User(req.body);
  console.log(user.workspace[0].boards);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: `${err}`,
      });
    }
    res.json({
      username: user.username,
      email: user.email,
    });
  });
};
