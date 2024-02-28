import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"


const connectDB = async () => {
    try {
        // mongoose returns an object 
        // we can hold the response 
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connection established !! DB HOST : ${connectInstance.connection.host}`);
    }
    catch (error) {
        console.error("MONGODB CONNECTION FAILED ", error);
        process.exit(1);
    }
}

export default connectDB

