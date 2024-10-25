import mongoose from "mongoose";


const infoSchema = mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    branch:{
        type:String,
        required:false,
    },
    year:{
        type:Number,
        required:false,
    },
    profession:{
        type:String,
        required:false,
    },
    links:{
        type:Map,
        of:String,
        default:{}
    },
    pfp:{
        type:String,
        required:false,
        default:"",
    }
})

 
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }, 
    email:{
        type:String, 
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:false
    },
    information:{
        type:infoSchema,
        default:{},
        required:false,
    },
    savedCollection:{
        type:Array,
        default:[],
        required:false,
    },
    blogs:{
        type:Array,
        default:[],
        required:false,
    },
    
})
export const User = mongoose.model("User", userSchema);
export const Info = mongoose.model("Info", infoSchema);