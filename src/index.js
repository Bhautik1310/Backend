import mongoose from "mongoose";
import {DB_NAME} from "./constance";
import express from "express";

const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.sample.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error : ", error)
            throw error
        })
        app.listen(process.env.sample.PORT, () => {
            console.log(`app is listening on ${process.env.sample.PORT}`);
        })
    } catch (error) {
        console.log("Error", error);
        throw error
    }
})()