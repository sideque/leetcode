import User from "../models/User";
import { fetchLeetCodeStats } from "../services/leetcodeService";

export const registerUser = async (data) => {
  const { name, leetcodeUsername } = data;

  // AUTO FETCH REAL STATS
  const stats = await fetchLeetCodeStats(leetcodeUsername);

  const totalScore =
    stats.easy * 1 +
    stats.medium * 2 +
    stats.hard * 3;

  const user = new User({
    name,
    leetcodeUsername,
    easySolved: stats.easy,
    mediumSolved: stats.medium,
    hardSolved: stats.hard,
    totalScore
  });

  await user.save();
  return user;
};

export const getLeaderboard = async () => {
  return await User.find().sort({ totalScore: -1 });
};
