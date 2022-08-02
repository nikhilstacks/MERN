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
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "This is an error enter value correctly..." });
  }

  //   console.log(req.body);
  //   res.json({ message: req.body });
  User.findOne({ email: email }).then((existUser) => {
    if (existUser) {
      return res.status(422).json({ error: "Email Already available..." });
    }

    const user = new User({ name, email, phone, work, password, cpassword });
    user
      .save()
      .then(() => {
        res.status(201).send({ message: "data inserted sucessfully..." });
      })
      .catch(() => {
        res.status(500).send({ error: "insert data correctly..." });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
