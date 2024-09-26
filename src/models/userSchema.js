import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    role:{type:String, default: "common"},
    name: String,
    idade: Number,
    email: String,
    password: String,
    createdAt: {type:Date, default: Date.now}
});

export const User = mongoose.model("usuario", userSchema)

