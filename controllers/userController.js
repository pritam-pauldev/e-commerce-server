const userServices = require("../services/userServices");

const getUser = userServices.getUserService;

const getUserById = userServices.getUserByIdService;

const postUser = userServices.postUserService;

module.exports = {
  getUser,
  getUserById,
  postUser,
};
