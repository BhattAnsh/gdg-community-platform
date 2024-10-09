import {blog, comment} from "../models/blog.model.js";
import { User } from "../models/user.model.js";

export const createBlog = async (req, res) => {
    let {heading, discription, content} = req.body;
    console.log(content);
    let createdBy = (req.query.userId).toString();
    console.log(createdBy);
    let newBlog = new blog({heading, discription, content, createdBy});
    await newBlog.save().then( async () => {
        let user = await User.findById(createdBy);
        console.log(user);
        user.blogs.push(newBlog._id);
        user.save().then(() => {
            res.status(201).json({
                type: "success",
                message: "Blog created successfully",
                id: newBlog._id,
            });
            return;
        });
    });
}

export const getBlog = async (req, res) => {
    const {id} = req.params;
    await blog.findOne({_id:id}).then((blog) => {
        if(blog){
            res.status(200).json({
                type: "success",
                message: "Blog found",
                blog: blog,
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Blog not found",
        });
        return;
    });
}

export const getAllBlogs = async (req, res) => {    
    await blog.find().then((blogs) => {
        res.status(200).json({
            type: "success",
            message: "Blogs found",
            blogs: blogs,
        });
        return;
    });
}

export const updateBlog = async (req, res) => {
    //the problem remains here is you have to create a logic by which first the blog data will be transferred to the ui and then it will place the data to the api according to the needs till then just work on the basic controller where you have to send all the data.
    const {blogId} = req.params;
    const {heading, discription, content} = req.body;
    await blog.findOne({_id:id}).then((blog) => {
        if(blog){
            blog.heading = heading
            blog.discription = discription;
            blog.content = content;
            blog.save().then(() => {
                res.status(200).json({
                    type: "success",
                    message: "Blog updated successfully",
                    id: blog._id,
                });
                return;
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Blog not found",
        });
        return;
    });
}

export const deleteBlog = async (req, res) => {
    const {blogId} = req.params;
    await blog.findOneAndDelete({_id:id}).then((blog) => {
        if(blog){
            res.status(200).json({
                type: "success",
                message: "Blog deleted successfully",
                id: blog._id,
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Blog not found",
        });
        return;
    });
}

export const createComment = async (req, res) => {
    const {content} = req.body;
    const createdBy = req.userId;
    const {id} = req.params;
    const newComment = new comment({content, createdBy});
    await blog.findOne({_id:id}).then((blog) => {
        if(blog){
            blog.comments.push(newComment);
            blog.save().then(() => {
                res.status(201).json({
                    type: "success",
                    message: "Comment created successfully",
                    id: newComment._id,
                });
                return;
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Blog not found",
        });
        return;
    });
}   

export const getComment = async (req, res) => {   
    const {id} = req.params;
    await comment.findOne({_id:id}).then((comment) => {
        if(comment){
            res.status(200).json({
                type: "success",
                message: "Comment found",
                comment: comment,
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Comment not found",
        });
        return;
    });
}

export const getAllComments = async (req, res) => {    
    await comment.find().then((comments) => {
        res.status(200).json({
            type: "success",
            message: "Comments found",
            comments: comments,
        });
        return;
    });
}

export const updateComment = async (req, res) => {
    const {id} = req.params;
    const {content} = req.body;
    await comment.findOne({_id:id}).then((comment) => {
        if(comment){
            comment.content = content;
            comment.save().then(() => {
                res.status(200).json({
                    type: "success",
                    message: "Comment updated successfully",
                    id: comment._id,
                });
                return;
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Comment not found",
        });
        return;
    });  
}

export const deleteComment = async (req, res) => {
    const {id} = req.params;
    await comment.findOneAndDelete({_id:id}).then((comment) => {
        if(comment){
            res.status(200).json({
                type: "success",
                message: "Comment deleted successfully",
                id: comment._id,
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Comment not found",
        });
        return;
    });
}

export const likeBlog = async (req, res) => {
    const {id} = req.params;
    await blog.findOne({_id:id}).then((blog) => {
        if(blog){
            blog.likes += 1;
            blog.save().then(() => {
                res.status(200).json({
                    type: "success",
                    message: "Blog liked successfully",
                    id: blog._id,
                });
                return;
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Blog not found",
        });
        return;
    });
}

export const unlikeBlog = async (req, res) => {
    const {id} = req.params;
    await blog.findOne({_id:id}).then((blog) => {
        if(blog){
            blog.likes -= 1;
            blog.save().then(() => {
                res.status(200).json({
                    type: "success",
                    message: "Blog unliked successfully",
                    id: blog._id,
                });
                return;
            });
            return;
        }
        res.status(404).json({
            type: "error",
            message: "Blog not found",
        });
        return;
    });
}