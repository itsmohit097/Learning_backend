import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();











// ! Not a better approach to connect Database
// const connectDB(){}
// connectDB()


//todo Better approach to connect Database
//todo its better to keep this in a seperate folder(db) and call that function here in the entry file
/*
import express from "express";
const app = express();

; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR: ",error);
            throw error
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        })

    }
    catch (error) {
        console.error("ERROR: " + error);
        throw err
    }
})()

*/