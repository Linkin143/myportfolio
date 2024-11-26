//jshint esversion:6

import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import sendMail from "./controllers/sendMail.js";
import connectDB from "./db/connectDB.js";
import userRoute from "./routes/userRoute.js";
const app = new express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

dotenv.config();
process.env.NODE_OPTIONS = '--tls-min-v1.2';

const port = process.env.PORT;

const DB_URL =process.env.DB_URL;


app.use("/", userRoute);

app.get("/mail", sendMail);


function startServer() {

    try {
        // Connect to the database
        connectDB(DB_URL);
        console.log("Database connected successfully!");

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on PORT: ${port}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1); // Exit the process if there's a critical failure
    }
};

startServer();


