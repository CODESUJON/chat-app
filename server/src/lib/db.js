import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoDB connected:${conn.connection.host}`);

    } catch (error) {
        console.log("Mongodb connnection error",error)
    }

}