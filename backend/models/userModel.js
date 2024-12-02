import mongoose from 'mongoose';

const userdataSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                // Regular expression to check if the email contains "@" and ends with ".com"
                return /@/.test(v) && /\.com$/.test(v);
            },
            message: props => `${props.value} is not a valid email. It should contain "@" and end with ".com".`
        }
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    }
});

const usersubscribedSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                // Regular expression to check if the email contains "@" and ends with ".com"
                return /@/.test(v) && /\.com$/.test(v);
            },
            message: props => `${props.value} is not a valid email. It should contain "@" and end with ".com".`
        }
    },
});

const userData = mongoose.model("userData", userdataSchema);
const usersubscribedData = mongoose.model("usersubscribedData", usersubscribedSchema);

export { userData, usersubscribedData };


