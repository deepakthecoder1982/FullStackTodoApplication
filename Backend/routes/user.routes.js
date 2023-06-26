const express = require("express");
const { userModel } = require("../Model/user.model");

const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.send({ users });
  } catch (error) {
    res.status(400).send({ error: error?.message });
  }
});

userRouter.post("/register", async (req, res) => {
  let user = userModel.find({ email: req.body?.email });
  console.log(user)
//   if (!user?.email) {
//     try {
//       bcrypt.hash(req.body?.pass, 6, async (err, hash) => {
//         if (hash) {
//           let data = userModel({ ...req.body, pass: hash });
//           await data.save();
//           res.send({ msg: "User Registered Succesfully", data });
//         } else {
//           res.status(400).send({ err: err?.message });
//         }
//       });
//     } catch (error) {
//       res.status(400).send({ err: error?.message });
//     }
//   } else {
//     res.send({ msg: "Email Already Registerd, Please Login" });
//   }
});
userRouter.post("/login", async (req, res) => {
  let user = userModel.findOne({ email: req.body?.email });
  try {
    if (user?.email) {
      bcrypt.compare(req.body?.pass, async (err, result) => {
        if (result) {
          jwt.sign(
            { user: user?.email, userId: user._id },
            "todoApp",
            function (err, token) {
              if (err) {
                res.status(400).send({ err: err?.message });
              } else {
                res.send({ msg: "Login Succesfully", token });
              }
            }
          );
        } else {
          res.status(400).send({ err: err?.message });
        }
      });
    } else {
      res.send({ msg: "User Not Exist, Please Register First!" });
    }
  } catch (error) {
    res.status(400).send({ err: error?.message });
  }
});

module.exports = {
  userRouter,
};
