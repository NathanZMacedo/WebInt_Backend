import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name: String,
    idade: Number,
    email: String,
    password: String,
    createdAt: {type:Date, default: Date.now}
});

export const User = mongoose.model("user, userSchema")

