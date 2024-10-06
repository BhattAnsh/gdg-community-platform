import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:false
    },
    createdAt:{
         type:Date,
         default: Date.now,
    },
    content:{
        type:String,
        required:false,
    }
})

const blogSchema = mongoose.Schema({
   heading:{
      type:String,
      required:true,
   },
   discription:{
      type:String,
      required:true,
   },
   content:{
      type:String,
      required:true,
   },
   createdAt:{
      type:Date,
      default: Date.now,
   },
   createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      required:true

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

export const blog = mongoose.model("blog",blogSchema);
export const comment = mongoose.model("comment",commentSchema);
