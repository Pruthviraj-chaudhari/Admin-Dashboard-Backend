import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please provide a last name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    mobile: {
        type: String,
        required: [true, "Please provide a mobile"],
    },
    countryCode: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})