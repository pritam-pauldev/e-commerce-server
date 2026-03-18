const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

router.get("/", (req, res) => {
    const userList = users.map(u => u.name).join(", ");
    console.log("Fetching all users");
    res.send(`Users: ${userList}`);
})

router.get("/:id", (req, res) => {
    const user = users.find((u) => u.id == req.params.id);
    if (!user) res.send("User Not Found");
    console.log(`Fetching user with id: ${req.params.id}`);
    res.send(`User: ${user.name}`);
});

router.post("/", (req, res) => {
    res.send("Adding a new User");
})

module.exports = router;