const express = require("express");
const app = express();
const routerUser = require("./routes/user");
const routerProduct = require("./routes/product");
const routerCart = require("./routes/cart");

app.use("/user", routerUser);
app.use("/product", routerProduct);
app.use("/cart", routerCart);

app.listen(3000, () => {
    console.log("Server is running in port 3000");
})