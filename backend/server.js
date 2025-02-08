import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

import productRoutes from './routes/products.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5002

app.use(express.json()); //allows us to accept json on body

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)

app.listen(PORT, ()=>{
    connectDB();
    console.log('server start at https://localhost:'+ PORT)
})

