import { User, Info } from "../models/user.model.js";
import bcrypt from 'bcrypt'

import { generateToken } from "../config/genrateToken.js";

export const signUp = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password,salt);
  try {
    let userExists = await User.findOne({
      username: username,
    });
    let emailExists = await User.findOne({
      email: email,
    });

    if (userExists || emailExists) {
      res.status(400).json({
        type: "error",
        message: "use different userName or Email",
      });
      return;
    }
  } catch {
    res.status(500).json({
      type: "error",
      message: "Internal Server error",
    });
    return;
  }

  const newUser = new User({ username, email, password:hashedPassword });
  const userId = newUser._id.toString();
  await newUser.save().then(() => {
    const token = generateToken(userId);

    res.status(201).json({
      type: "success",
      message: "User created successfully",
      id: userId,
      jwt: token,
      username: username,
    });
    return;
  });
};
export const signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    let userExists = await User.findOne({
      username: username,
    });
    if (userExists) {
        let passwordMatch = bcrypt.compare(password, userExists.password);
      if (passwordMatch) {
        const userId = userExists._id.toString();
        const token = await generateToken(userId);

        res.status(200).json({
          type: "success",
          message: "successfully logined",
          u_id: userId,
          token: token,
        });
        return;
      }
      res.status(403).json({
        type: "error",
        message: "incorrect password",
      });
      return;
    }
    res.status(404).json({
      type: "error",
      message: "User not found",
    });
    return;
  } catch (error) {
    res.status(500).json({
      type: "error",
      message: "Internal Server error",
    });
    console.log(error);
    return;
  }
};
