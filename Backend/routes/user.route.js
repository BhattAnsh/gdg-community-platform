import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('This is the user route');
});

export default userRouter