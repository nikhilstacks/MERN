const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

// -----------DB connection------
require("../db/conn");
const User = require("../model/userSchema");
const { set } = require("mongoose");

// ------------Routes-----------

router.use(cookieParser());

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
    console.log("saara bhara...");
    return res
      .status(422)
      .json({ error: "This is an error enter value correctly..." });
  }

  try {
    const existUser = await User.findOne({ email: email });

    if (existUser) {
      console.log("exist user");
      return res.status(422).json({ error: "Email Already available..." });
    } else if (password != cpassword) {
      console.log("password not matched");
      return res.status(422).json({ error: "Password is no matching..." });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();
      res.status(201).json({ message: "data inserted sucessfully..." });
      console.log("success");
    }
  } catch (err) {
    console.log(err);
  }
});

//---------------------------------signin-------------------------------------------
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ message: "INVALID DETAILS..." });
    console.log("poora bhar");
    return;
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
        console.log("miracle login hogya");
      } else {
        res.status(422).json({ error: "wrong credentials..." });
        console.log("nhi hua match password");
        return;
      }
    } else {
      res.status(422).json({ error: "wrong credentials..." });
      console.log("user hai hi nhiii email....");
      return;
    }
  } catch (err) {
    res.status(422).json({ err: err });
    return;
  }
});

// this is for the about me page route
router.get("/aboutme", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//-------------------getting data for the home page-----------------------------------------------
router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser); //sending data of the authenticated user as response
});

//-----------------------------------contact/message----------------------------------------
router.post("/contact", authenticate, async (req, res) => {
  const { message } = req.body;
  if (!message) {
    res.status(422).send({ message: "INVALID MESSAGE..." });
    console.log("poora bhar");
    return;
  }

  const userMessage = await User.findOne({ _id: req.userId });
  if (userMessage) {
    const sendMessage = await userMessage.addMessage(message);
    console.log("this is message which is sent: ", sendMessage);

    // await userMessage.save();

    res
      .status(201)
      .send({ message: "user message sent successfully successfully" });
  } else {
    res.status(422).send({ message: "this is not valid message" });
  }
});

//-----------------------------------logout----------------------------------------------
router.get("/logout", authenticate, (req, res) => {
  console.log("successfully entering logout");
  res.clearCookie("jwtToken", { path: "/" }); //to remove the response cookie
  res.send({ message: "user Logged out successfully" });
});

module.exports = router;
