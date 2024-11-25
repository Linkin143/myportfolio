import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const sendMail = async (to,subject,text,html) => {

    let testAccount = await nodemailer.createTestAccount();
    // Below only needed if you dont have a real mail account.
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });


    const info = await transporter.sendMail({
        from: {
            name: "FutureX",
            address: process.env.USER,
        }, // sender address
        to,// list of receivers
        subject, // Subject line
        text,// plain text body
        html
    })

    console.log("Message sent: %s", info.messageId);

}

export default sendMail;;