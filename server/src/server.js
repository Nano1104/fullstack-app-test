import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";

import { PORT } from "./config/envConfig.js";

//routes
import authRouter from "./routes/auth.router.js";
import prodRouter from "./routes/products.router.js";
import userRouter from "./routes/user.router.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());
app.use(cookieParser());

app.use("/api/", authRouter)
app.use("/api/products", prodRouter)
app.use("/api/user", userRouter)


//LISTENING
app.listen(PORT, () => {
    connectDB()
    console.log(`listening on ${PORT}`);
})