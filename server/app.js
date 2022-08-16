const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// if we require a file
// if a function is called inside that file it will automatically run when it is required
// require("../db/testing");

// ---------  DB  ------------------
dotenv.config({ path: "./config.env" });
require("./db/conn");
// const USER = require("../model/userSchema");

// ---------   PORT    --------------
const PORT = process.env.PORT;

// ---------  Routes   -------------
app.use(express.json()); // converting returning data into object form from json type
app.use(require("./router/auth"));

app.get("/", (req, res) => {
  res.send(`This is the home page...`);
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
