import { Router } from "express";
import {signIn, signUp, addUserInfo, updateUserInfo, getUserInfo}  from "../controllers/user.controller.js";
import { auth } from "../middlewares/Authentication/auth.js";
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('This is the user route');
});
userRouter.post('/signUp', signUp);
userRouter.post('/signIn', signIn);
userRouter.post('/addDetails', auth, addUserInfo);



export default userRouter