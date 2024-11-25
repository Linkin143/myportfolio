//jshint esversion:6

import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import sendMail from "./controllers/sendMail.js";
import connectDB from "./db/connectDB.js";
import userRoute from "./routes/userRoute.js";
const app = new express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());

dotenv.config();
const port = process.env.PORT || 4000;
const DB_URL =process.env.DB_URL || "mongodb://localhost:27017/mpuserdetaildb"


app.use("/",userRoute);

app.get("/mail", sendMail);


connectDB(DB_URL).then(()=>{
    app.listen(port, () => {
        try {
            console.log(`Server is running on the PORT:${port}`);
            
        } catch (error) {
            console.log(error);
        }
    })
})


