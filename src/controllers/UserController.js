import { User } from "../models/userSchema";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class UserController{
    static async loginUser(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email })
            if(!user) {
                return res.status(404).json({ message: "User not found" })
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json{(message: "Invalid password" )}
            }
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1h"
            })
            return res.status(200).json({token})
        } catch (error) {
            console.error("Erro ao fazer login", error)
            return res.status(500).json({ message: "Internal servererror"})
        }
    }
}