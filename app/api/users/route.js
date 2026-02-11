import { connectDB } from "@/lib/db";
import { registerUser, getLeaderboard } from "@/controllers/userController";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const user = await registerUser(data);
    return Response.json({ message: "Registered with real LeetCode stats!", user });
  } catch (error) {
    console.error("Registration Error:", error);
    return Response.json({ message: error.message || "Registration failed" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (username) {
      const user = await User.find({ leetcodeUsername: username });
      return Response.json(user);
    }

    const users = await getLeaderboard();
    return Response.json(users);
  } catch (error) {
    return Response.json({ message: "Failed to fetch users", error: error.message }, { status: 500 });
  }
}

