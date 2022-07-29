const mongoose = require("mongoose");

// ----------  DB key  --------------
const DB = process.env.DATABASE;

// ----------DB connect-------------
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successfull...");
  })
  .catch((err) => console.log("connection unsuccessfull..."));
