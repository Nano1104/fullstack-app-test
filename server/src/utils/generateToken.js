import jwt from "jsonwebtoken";

import { JWT_TOKEN_KEY } from "../config/envConfig.js";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, JWT_TOKEN_KEY, {expiresIn: '1h'})
    
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Asegúrate de que está habilitado para HTTPS
        sameSite: process.env.NODE_ENV === 'production' ? "None" : "Lax", // Para permitir el envío de cookies entre sitios
        maxAge: 60 * 60 * 1000, // 1 hora
    });
}

export default generateTokenAndSetCookie