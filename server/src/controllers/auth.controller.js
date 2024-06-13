import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        const { username, role } = req.body;
        
        const user = await User.findOne({ username: username });
        
        if(user) return res.status(400).json({message: "User already exists", err});

        const newUser = await User.create({ ...req.body, role: role ? role : "user" })

        res.status(200).json({message: "Register successful", newUser})
    } catch (err) {
        res.status(400).json({message: "Error Register user", err});
    }
}

export const login = async (req, res) => {
    try {
        const { username } = req.body
        
        const userFound = await User.findOne({ username: username })
        if(!userFound) res.status(400).json({message: "User does not exists", err});

        generateTokenAndSetCookie(userFound._id, res)
        
        res.status(200).json({message: "Login successful", userFound})
    } catch (err) {
        res.status(400).json({message: "Error login user", err});
    }
}
