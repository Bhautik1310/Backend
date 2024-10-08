import mongoose from "mongoose";
import { DB_NAME } from "../constance.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.sample.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected ! DB Host : ${connectionInstance}`);
    } catch (error) {
        console.log("Error in Connection", error);
        process.exit(1);
    }
}
export default connectDB