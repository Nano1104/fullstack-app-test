import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

import { JWT_TOKEN_KEY } from "../config/envConfig.js";

export const authMiddle = (req, res, next) => {
    const token = req.cookies.jwt
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, JWT_TOKEN_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
}

export const adminMiddle = async (req, res, next) => {
    try {
        console.log("🚀 ~ adminMiddle ~ req.user:", req.user)
        const user = await User.findById(req.user.userId);
        
        if (!user) return res.status(404).json({ message: 'User not found.' });

        if (user.role !== 'admin') return res.status(403).json({ message: 'Access denied. Admins only.' });

        next();
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err });
    }
        
}