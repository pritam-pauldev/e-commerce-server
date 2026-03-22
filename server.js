const express = require("express");
const app = express();
const routerUser = require("./routes/user");
const routerProduct = require("./routes/product");
const routerCart = require("./routes/cart");

app.use("/user", routerUser);

app.use(express.static("public"));
app.use(express.json());

app.use("/product", routerProduct);
app.use("/cart", routerCart);

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});

// FLOW ===>>
// server -> routes -> controllers -> services -> utils(centralised error handling)
