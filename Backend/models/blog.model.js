import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    createdAt:new Date(0),
    content:{
        type:string,
        required:true,
    }
})

const blogSchema = mongoose.Schema({
     createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true

     },
     heading:{
        type:String,
        required:true,
     },
     discription:{
        type:String,
        required:true,
     },
     createdAt:{
        type:Date,
        default: Date.now,
     },
     content:{
        type:string,
        required:true,
     },
     likes:{
        type:Number,
        required:false,
        default:0
     },
     comments:{
        type:commentSchema,
        default:{}
     }

});

export {blogSchema, commentSchema};
