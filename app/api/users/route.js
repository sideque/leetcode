import { connectDB } from "@/lib/db";
import { registerUser, getLeaderboard } from "@/controllers/userController";

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const user = await registerUser(data);
  return Response.json({ message: "Registered with real LeetCode stats!", user });
}

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (username) {
    const user = await User.find({ leetcodeUsername: username });
    return Response.json(user);
  }

  const users = await getLeaderboard();
  return Response.json(users);
}

