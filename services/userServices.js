const getUserService = (req, res) => {
  res.send(`Fetching all users`);
};

const getUserByIdService = (req, res) => {
  res.send(`Fetching user with ID: ${req.params.id}`);
};

const postUserService = (req, res) => {
  res.send("Adding a new User");
};

module.exports = {
  getUserService,
  getUserByIdService,
  postUserService,
};