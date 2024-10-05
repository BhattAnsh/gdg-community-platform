import { Router} from "express";

const blogRouter = Router();

blogRouter.get('/', (req,res) =>{
    res.send("This is a blog route");
});

export default blogRouter;