const getProductService = (req, res) => {
  res.send("Fetching all products");
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
    postProductService
}