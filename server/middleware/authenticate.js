import jwt from "jsonwebtoken";
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    res.status(401).send("UnAthorized user...");
    console.log(err);
  }
};

module.exports = authenticate;
