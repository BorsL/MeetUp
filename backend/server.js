import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import path from 'path';
import productRoutes from './routes/products.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;
const __dirname = path.resolve();

// Middleware configuration
app.use(express.json());
app.use(cookieParser());

// Enhanced CORS configuration
const corsOptions = {
  origin: [
    process.env.CLIENT_URL, // Production URL
    'http://localhost:5173' // Development URL
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Production configuration
if(process.env.NODE_ENV === "production") {
  // Serve static files
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  
  // Handle SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });

  // Trust proxy for secure cookies
  app.set('trust proxy', 1);
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Database connection and server start
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();