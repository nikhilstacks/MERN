const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// -----------DB connection------
require("../db/conn");
const User = require("../model/userSchema");
const { set } = require("mongoose");

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
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password is no matching..." });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();
      res.status(201).json({ message: "data inserted sucessfully..." });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ message: "INVALID DETAILS..." });
  }

  try {
    const userExist = await User.findOne({
      email: email,
    });
    // console.log(userExist);

    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password); //comparing hash with pass
      if (isMatch) {
        const token = await userExist.generateAuthToken();
        console.log(token);

        // cookies are not set
        res.cookie("jwtToken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        res.status(201).json({ message: "user login successfully..." });
      } else {
        res.status(401).json({ error: "wrong credentials..." });
      }
    } else {
      res.status(401).json({ error: "wrong credentials..." });
    }
  } catch (err) {
    res.status(404).json({ err: err });
  }
});

module.exports = router;
