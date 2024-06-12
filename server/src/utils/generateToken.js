import jwt from "jsonwebtoken";

import { JWT_TOKEN_KEY } from "../config/envConfig.js";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, JWT_TOKEN_KEY, {expiresIn: '1h'})

    res.cookie("jwt", token, {
        httpOnly: true
    })
}

export default generateTokenAndSetCookie