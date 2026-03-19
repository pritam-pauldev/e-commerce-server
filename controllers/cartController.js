const cartServices = require("../services/cartServices");

const getCartById = cartServices.getCartById;

const postCartById = cartServices.postCartById;

module.exports = {
  getCartById,
  postCartById,
};
