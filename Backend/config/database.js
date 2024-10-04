import mongoose from 'mongoose'
import env from 'dotenv'

env.config();

const db_url = process.env.DB_URL;

export const connectDb = async() =>{
    await mongoose.connect(db_url).then(() =>{
        console.log("Database is connected");
    })
}