const express = require("express");
const router = express.Router();

// -----------DB connection------
require("../db/conn");
const User = require("../model/userSchema");

// ------------Routes-----------
router.get("/", (req, res) => {
  res.send("This is the file send from auth.js..");
});

// ---------------- With Promises --------------------------------

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res
//       .status(422)
//       .json({ error: "This is an error enter value correctly..." });
//   }

//   User.findOne({ email: email }).then((existUser) => {
//     if (existUser) {
//       return res.status(422).json({ error: "Email Already available..." });
//     }

//     const user = new User({ name, email, phone, work, password, cpassword });
//     user
//       .save()
//       .then(() => {
//         res.status(201).send({ message: "data inserted sucessfully..." });
//       })
//       .catch(() => {
//         res.status(500).send({ error: "insert data correctly..." });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

// --------------------- Async/Await -------------------------------

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "This is an error enter value correctly..." });
  }

  try {
    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return res.status(422).json({ error: "Email Already available..." });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    await user.save();
    res.status(201).send({ message: "data inserted sucessfully..." });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).send({ message: "INVALID DETAILS..." });
  }

  try {
    const userExist = await User.findOne({
      email: email,
      password: password,
    });

    console.log(userExist);

    if (userExist) {
      res.status(201).send({
        message: "user login successfully...",
      });
    } else {
      res.status(401).send({ error: "there is an error..." });
    }
  } catch (err) {
    res.status(404).send({ err: err });
  }
});

module.exports = router;
