const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "../config.env" });
require("../db/conn");

// ---------   PORT    --------------
const PORT = process.env.PORT;

// ----------Middleware--------------
const Middleware = (req, res, next) => {
  console.log("This is my middle ware...");
  next();
};

app.get("/", (req, res) => {
  res.send(`This is the home page...`);
});

app.get("/aboutme", Middleware, (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server successfully running on port ${PORT}...`);
});