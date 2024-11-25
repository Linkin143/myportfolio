import React from 'react';
import "./wlcmMail.css";

const wlcmMail = () => {


    return (
        <div class="email-container">
            <div class="header">
                <h1>Welcome to Our Service!</h1>
            </div>
            <div class="content">
                <h2>Hello [Recipient's Name],</h2>
                <p>
                    Thank you for signing up with us! We are thrilled to have you on board. Our platform offers the best features to help you get started quickly and easily.
                </p>
                <p>
                    To begin exploring, please verify your account by clicking the button below:
                </p>
                <a href="#" class="button">Verify Account</a>
                <p>
                    If you have any questions or need help, feel free to reach out to our support team.
                </p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <p>
                    <a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}

export default wlcmMail;