const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Laptop", price: 80000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
];

const carts = [
  {
    userId: 1,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 2 },
    ],
  },
  {
    userId: 2,
    items: [{ productId: 2, quantity: 1 }],
  },
  {
    userId: 3,
    items: [],
  },
];

router.get("/:userId", (req, res) => {
    const cartById = carts.find(c => c.userId == req.params.userId);
    if (!cartById) res.send("Cart Not Found");
    console.log(`Fetching the cart by id: ${req.params.userId}`);
    const detailedCart = cartById.items.map((item) => {
      const product = products.find((p) => p.id === item.productId);

      if (!product) {
        return {
          productId: item.productId,
          message: "Product not found",
          quantity: item.quantity,
        };
      }

      return {
        productId: product.id,
        name: product.name,
        quantity: item.quantity,
      };
    });

    res.send(detailedCart);
})

router.post("/:userId", (req, res) => {
    res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
})

module.exports = router;