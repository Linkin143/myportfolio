import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import sendMail from "../controllers/sendMail.js";
import { userData, usersubscribedData } from "../models/userModel.js";


dotenv.config();
const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const router = new express.Router();


//create data

router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const userAdded = await userData.create({
            name: name,
            email: email,
            subject: subject,
            message: message,
        })

        res.status(200).json(userAdded);

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

//get All the data created

router.get("/", async (req, res) => {
    try {
        const showuserData = await userData.find();
        res.status(200).json(showuserData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

// sending mail to last user submitted form
router.get("/mail", async (req, res) => {
    try {
        const lastUser = await userData.find().sort({ $natural: -1 }).limit(1);
        res.status(200).json(lastUser);
        console.log(lastUser);
        const name = lastUser[0].name;
        const email = lastUser[0].email;
        const subject = lastUser[0].subject;

        sendMail(email, subject, "", `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f9f9f9; color: #333;">
    <div style="max-width: 600px; margin: 20px auto; background: #fff; border: 1px solid #ddd; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <div style="background: #21e821; color: white; text-align: center; padding: 20px 10px;">
            <h1 style="margin: 0; font-size: 1.8rem;">Thank You for Contacting Us</h1>
        </div>
        <div style="padding: 20px;">
            <h2 style="color: green; margin-bottom: 10px;">Hello ${name},</h2>
            <p style="margin: 10px 0;">Thank you for reaching out to us. We have received your query and our team is currently reviewing it. We will get back to you as soon as possible with a resolution or further details.</p>
            <p style="margin: 10px 0;">In the meantime, if you have any additional information or questions, feel free to reply to this email.</p>
            <p style="margin: 10px 0;">We appreciate your patience and understanding.</p>
            <p style="margin: 10px 0;">Best regards,</p>
            <p style="margin: 10px 0;"><strong>The FutureX Team</strong></p>
        </div>
        <div style="text-align: center; padding: 15px 10px; font-size: 0.9rem; color: #666; background: #f8f9fa;">
            <p style="margin: 10px 0;">Need urgent assistance? Visit our <a href="https://myportfolio-app-y1up.onrender.com/contact" style="color: #007bff; text-decoration: none;">Support Page</a>.</p>
            <p style="margin: 10px 0;">&copy; 2024 FutureX. All rights reserved.</p>
        </div>
    </div>
</body>`);


    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

//create data for subscriber

router.post("/subscriber", async (req, res) => {
    try {
        const { name, email, } = req.body;
        const subscriberAdded = await usersubscribedData.create({
            name: name,
            email: email,

        })

        res.status(200).json(subscriberAdded);

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

//get All the data created subscriber

router.get("/subscriber", async (req, res) => {
    try {
        const showSubscriber = await usersubscribedData.find();
        res.status(200).json(showSubscriber);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

// sending mail to last user submitted form
router.get("/lastsubscriber", async (req, res) => {
    try {
        const lastSubscriber = await usersubscribedData.find().sort({ $natural: -1 }).limit(1);
        res.status(200).json(lastSubscriber);
        console.log(lastSubscriber);
        const name = lastSubscriber[0].name;
        const email = lastSubscriber[0].email;
        const subject = "Greeting from FutureX!"

        // sendMail(email, subject, "", `Hi ${name}, Thanks! for subscribing to us. Will keep you updated.`);
        sendMail(email, subject, "", `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f8f9fa; color: #212529;">
    <div style="max-width: 600px; margin: 20px auto; background: #fff; border: 1px solid #ddd; border-radius: 5px; overflow: hidden;">
        <div style="background: #21e821; color: white; text-align: center; padding: 20px 10px;">
            <h1 style="margin: 0; font-size: 1.5rem;">Thank You for Subscribing!</h1>
        </div>
        <div style="padding: 20px;">
            <h2 style="color: green;">Hello ${name},</h2>
            <p style="margin: 10px 0;">We’re thrilled to have you join our newsletter community! You’ll now receive the latest updates, tips, and exclusive content straight to your inbox.</p>
            <p style="margin: 10px 0;">If you have any questions, feel free to reply to this email. We’re always here to help!</p>
            <p style="margin: 10px 0;">Stay tuned for exciting updates!</p>
            <p style="margin: 10px 0;">Best regards,</p>
            <p style="margin: 10px 0;"><strong>The FutureX Team</strong></p>
        </div>
        <div style="text-align: center; padding: 15px 10px; font-size: 0.9rem; color: #6c757d; background: #f8f9fa;">
            <p>If you wish to unsubscribe, you can <a href="#" style="color: #007bff; text-decoration: none;">click here</a>.</p>
            <p>&copy; 2024 FutureX. All rights reserved.</p>
        </div>
    </div>
</body>`);


    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})


export default router;