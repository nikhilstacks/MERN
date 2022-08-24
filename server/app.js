// closing project on 24/08/2022------CSS can be improved-----------other than that everything is good
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
const PORT = process.env.PORT || 5000;

// ---------  Routes   -------------
app.use(express.json()); // converting returning data into object from json type
app.use(require("./router/auth"));

// for heroku
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server successfully running on port ${PORT}...`);
});
