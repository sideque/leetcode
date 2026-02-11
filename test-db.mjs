import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '.env.local' });

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("Already connected");
    return;
  }

  try {
    console.log("Attempting to connect to MongoDB...");
    // Check if URI is defined
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in .env.local");
    }
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};

connectDB();
