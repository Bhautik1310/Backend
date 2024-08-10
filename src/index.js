// require('dotenv').config({path: './env.sample'})  // method 1

// import mongoose from "mongoose";
// import {DB_NAME} from "./constance";
// import express from "express";
import dotenv from "dotenv"; //    method 2
import connectDB from "./db/index.js";

dotenv.config({
    path: './env.sample'     //    with method 2
})

connectDB()

// const app = express();
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.sample.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("error : ", error)
//             throw error
//         })
//         app.listen(process.env.sample.PORT, () => {
//             console.log(`app is listening on ${process.env.sample.PORT}`);
//         })
//     } catch (error) {
//         console.log("Error", error);
//         throw err
//     }
// })()