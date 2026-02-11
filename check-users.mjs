import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing");
}

const userSchema = new mongoose.Schema({
  name: String,
  leetcodeUsername: String,
  easySolved: Number,
  mediumSolved: Number,
  hardSolved: Number,
  totalScore: Number
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

const checkDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB: " + mongoose.connection.name);
    
    const users = await User.find({});
    console.log("Users found:", users.length);
    console.log(JSON.stringify(users, null, 2));
    
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.disconnect();
  }
};

checkDB();
