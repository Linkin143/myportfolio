import mongoose from "mongoose";


const connectDB = (DB_URL) => {
    try {
        mongoose.connect(DB_URL, {
            ssl: true,
            tlsInsecure: false, // Ensure proper certificate validation
            // tlsAllowInvalidCertificates: true,
            serverSelectionTimeoutMS: 5000,
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        });
        console.log("DB created")
        mongoose.set('debug', true);
    } catch (error) {
        console.log(error)
    }

}

export default connectDB;