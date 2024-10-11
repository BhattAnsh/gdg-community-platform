import { User } from "../../models/user.model.js";
export const authorization = async (req, res, next) => {
    try {
        const userId = req.query.userId;
        console.log(userId);
        const blogId = req.query.blogId;
        const user = await User.findById(userId);
        const blog = user.blogs;
        if(!blog){
            return res.status(401).json({
                status: 'error',
                message: 'Unauthorized',
            });
        }
        next();



    } catch (error) {
        console.log(error);
        return res.status(401).json({
        status: 'error',
        message: 'Unauthorized',
        });
    }
}