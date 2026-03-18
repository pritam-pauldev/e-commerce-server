const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Laptop", price: 80000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
];

router.get("/", (req, res) => {
    const productList = products.map(p => p.name).join(", ");
    console.log("Fetching all Products");
    res.send(`Products: ${productList}`);
})

router.get("/:id", (req, res) => {
    const product = products.find((p) => p.id == req.params.id);
    if (!product) res.send("Product Not Found");
    console.log(`Fetching product with id: ${req.params.id}`);
    res.send(`Product: ${product.name}`);
});

router.post("/", (req, res) => {
    res.send("Adding a new product");
})

module.exports = router;