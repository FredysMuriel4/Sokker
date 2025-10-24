console.clear();

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import statusRouter from './routes/status-route.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.text());

app.use("/status", statusRouter);

const bootstrap = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    
    app.listen(PORT, () => {
        console.log(`Servidor levantado en el puerto ${PORT}`);
    })
}

bootstrap();