import mongoose from "mongoose";
import { DB_PASSWORD } from "../config/envConfig.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://full-stact-user-test:${DB_PASSWORD}@full-stack-cluster-test.qrdf6te.mongodb.net/?retryWrites=true&w=majority&appName=full-stack-cluster-test`);
        console.log(`======== Connected to MongoDB ===========`)
    } catch (err) {
        console.log(`======== Failed connection to MongoDB ===========`, err)
    }
}

const startKeepAlive = () => {
    // Verificar si la conexión está lista antes de enviar el ping
    mongoose.connection.on('open', () => {
        console.log('Conexión establecida, iniciando keep-alive...');
        setInterval(() => {
            mongoose.connection.db.admin().ping((err, result) => {
                if (err) {
                    console.error('Error al enviar ping:', err);
                } else {
                    console.log('Ping a MongoDB exitoso:', result);
                }
            });
        }, 60 * 60 * 1000); // Cada hora
    });
};

export default connectDB;

