import { Router } from "express";
import {signIn, signUp}  from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('This is the user route');
});
userRouter.post('/signUp', signUp);
userRouter.post('/signIn', signIn);



export default userRouter