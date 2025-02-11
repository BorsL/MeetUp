import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
import path from 'path';

import productRoutes from './routes/products.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5002

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept json on body
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)


//this will fix problem to different port between production
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, ()=>{
    connectDB();
    console.log('server start at https://localhost:'+ PORT)
})

