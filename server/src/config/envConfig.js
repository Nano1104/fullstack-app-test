import { config } from "dotenv";

config()

const { PORT, DB_USER, DB_PASSWORD, JWT_TOKEN_KEY } = process.env 

export { PORT, DB_USER, DB_PASSWORD, JWT_TOKEN_KEY }
