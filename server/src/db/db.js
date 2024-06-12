import mongoose from "mongoose";
import { DB_PASSWORD } from "../config/envConfig.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://full-stact-user-test:${DB_PASSWORD}@full-stack-cluster-test.qrdf6te.mongodb.net/?retryWrites=true&w=majority&appName=full-stack-cluster-test`);
        console.log(`======== Connected to MongoDB ===========`)
    } catch (err) {
        console.log(`======== Failed connection to MongoDB ===========`, err)
    }
}

export default connectDB;