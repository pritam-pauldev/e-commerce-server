const getUser = (req, res) => {
  res.send(`Fetching all users`);
};

const getUserById = (req, res) => {
  res.send(`Fetching user with ID: ${req.params.id}`);
};

const postUser = (req, res) => {
  res.send("Adding a new User");
};

module.exports = {
    getUser,
    getUserById,
    postUser
}