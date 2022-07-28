const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Abe chalrha hai ye to bc...`);
});

app.get("/aboutme", (req, res) => {
  res.send("this is about me page...");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page...");
});

app.listen(3000, () => {
  console.log("Server successfully running on port 3000...");
});
