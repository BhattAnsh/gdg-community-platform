import { Router} from "express";
import { auth } from "../middlewares/Authentication/auth.js";
import { authorization } from "../middlewares/Authorisation/auth.js";
import { createBlog, getBlog, getAllBlogs, updateBlog, deleteBlog } from "../controllers/blog.controller.js";
const blogRouter = Router();

blogRouter.post("/create",auth, createBlog);
blogRouter.post("/edit", auth, authorization, updateBlog );
export default blogRouter;