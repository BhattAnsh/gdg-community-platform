import { User, Info } from "../models/user.model.js";
import bcrypt from 'bcrypt'

import { generateToken } from "../config/genrateToken.js";


//this will create user
export const signUp = async (req, res) => {
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

//this will login user
export const signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    let userExists = await User.findOne({
      username: username,
    });
    if (userExists) {
        let passwordMatch = await bcrypt.compare(password, userExists.password);
        console.log(passwordMatch)
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
      else{
        res.status(403).json({
          type: "error",
          message: "incorrect password",
        });
        return;
      }
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
    return;
  }
};

//this will get user information
export const getUserInfo = async (req, res) => {
  const { userId } = req.query;
  try {
    let user =  await User.findById(userId, { password: 0 });
    if (user) {
      res.status(200).json({
        type: "success",
        message: "User found",
        user: user,
      });
      return;
    }
    res.status(404).json({
      type: "error",
      message: "User not found",
    });
    return;
  }
  catch (error) {
    res.status(500).json({
      type: "error",
      message: "Internal Server error",
    });
    return;
  }
}

//this will add user information
export const addUserInfo = async (req, res) => {
  const userId = req.query.userId
  const { name, branch, year, profession, links } = req.body;
  try {
    let user = await User.findById(userId);
    if (user) {
      user.information = {name, branch, year, profession, links};
      await user.save();
      res.status(200).json({
        type: "success",
        message: "User information added",
      });
      return;
    }
    res.status(404).json({
      type: "error",
      message: "User not found",
    });
    return;
  }catch (error) {
    console.log(error);
    res.status(500).json({
      type: "error",
      message: "Internal Server error",
    });
    return;
  }
}

//this will update user information
export const updateUserInfo = async (req, res) => {
  const userId = req.query.userId
  const { name, branch, year, profession, links } = req.body;
  try {
    let user = await User.findById(userId);
    if (user) {
      user.information = {name, branch, year, profession, links};
      await user.save();
      res.status(200).json({
        type: "success",
        message: "User information updated",
      });
      return;
    }
    res.status(404).json({
      type: "error",
      message: "User not found",
    }); 
    return;
  }
  catch (error) {
    res.status(500).json({
      type: "error",
      message: "Internal Server error",
    });
    return;
  }
}


//this will delete user
export const deleteUser = async (req, res) => {
  const userId = req.query.userId;
  try {
    let user = await User.findById(userId);
    if (user) {
      await user.deleteOne();
      res.status(200).json({
        type: "success",
        message: "User deleted",
      });
      return;
    } 
    res.status(404).json({
      type: "error",
      message: "User not found",
    });
    return;
  }
  catch (error) {
    res.status(500).json({
      type: "error",
      message: "Internal Server error",
    });
    return;
  }
}

