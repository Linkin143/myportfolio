import mongoose from 'mongoose';

const userdataSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true},
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    }
})

const usersubscribedSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, required: true, unique :true, lowercase: true, trim: true },
})

const userData = mongoose.model("userData", userdataSchema);
const usersubscribedData =mongoose.model("usersubscribedData",usersubscribedSchema);
export { userData, usersubscribedData };

