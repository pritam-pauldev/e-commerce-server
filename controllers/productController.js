const productServices = require("../services/productServices")

const getProduct = productServices.getProductService;

const getProductById = productServices.getProductByIdService;

const postProduct = productServices.postProductService;

module.exports = {
    getProduct,
    getProductById,
    postProduct
}