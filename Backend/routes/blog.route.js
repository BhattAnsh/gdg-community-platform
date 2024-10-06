import { Router} from "express";
import { auth } from "../middlewares/Authentication/auth.js";
import { createBlog, getBlog, getAllBlogs, updateBlog, deleteBlog } from "../controllers/blog.controller.js";
const blogRouter = Router();

blogRouter.post("/create",auth, createBlog);

export default blogRouter;