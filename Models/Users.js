import mongoose from "mongoose";
import { Schema } from "mongoose";

const user = new Schema({
    name: String,
    email: String,
    password: String,
    number: Number,
    role: String
});

export default mongoose.model('Users', user);