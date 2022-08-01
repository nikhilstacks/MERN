const express = require("express");
const router = express.Router();

// -----------DB connection------
require("../db/conn");
const User = require("../model/userSchema");

// ------------Routes-----------
router.get("/", (req, res) => {
  res.send("This is the file send from auth.js..");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword, date } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword || !date) {
    res.status(422).json({ error: "This is an error..." });
  }

  //   console.log(req.body);
  //   res.json({ message: req.body });
  User.findOne({ email: email }).then((existUser) => {
    if (existUser) {
      res.status(422).json({ error: "Email Already available..." });
    }
  });
});

module.exports = router;
