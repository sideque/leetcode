import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    throw new Error("MongoDB connection failed");
  }
};
