const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProduct);

router.get("/:id", productController.getProductById);

router.post("/", productController.postProduct);

module.exports = router;
