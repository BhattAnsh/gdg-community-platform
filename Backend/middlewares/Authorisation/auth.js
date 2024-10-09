import { User } from "../../models/user.model.js";
export const authorization = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const blogId = req.params.blogId;
        const user = await User.findById(userId);
        const blog = user.quizzes.id(blogId);
        if(blog.createdBy != userId){
            return res.status(401).json({
                status: 'error',
                message: 'Unauthorized',
            });
        }
        next();



    } catch (error) {
        return res.status(401).json({
        status: 'error',
        message: 'Unauthorized',
        });
    }
}