const path = require("path");
const getProductService = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "product.html"));
};

const getProductByIdService = (req, res) => {
  res.send(`Fetching product with ID: ${req.params.id}`);
};

const postProductService = (req, res) => {
  res.send("Adding a new product");
};

module.exports = {
  getProductService,
  getProductByIdService,
  postProductService,
};
