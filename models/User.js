import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  leetcodeUsername: String,
  easySolved: Number,
  mediumSolved: Number,
  hardSolved: Number,
  totalScore: Number
});

export default mongoose.models.User || mongoose.model("User", userSchema);
