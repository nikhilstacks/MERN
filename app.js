const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`This is the home page...`);
});

app.get("/aboutme", (req, res) => {
  res.send("this is about me page...");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page...");
});

app.get("/signin", (req, res) => {
  res.send("this is signin page...");
});

app.get("/signup", (req, res) => {
  res.send("this is contact page...");
});

app.listen(3000, () => {
  console.log("Server successfully running on port 3000...");
});
