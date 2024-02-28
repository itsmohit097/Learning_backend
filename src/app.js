import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// config CORS
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// accepting json responses
app.use(express.json({ limit: "16kb" }));

// when data is coming from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// when we want to store public assets(favicon,images,etc.) in our server
app.use(express.static("public"));

// cookie parser
app.use(cookieParser());


export default app