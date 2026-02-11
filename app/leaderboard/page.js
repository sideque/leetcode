"use client";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
            setUsers(data);
        } else {
            console.error("Leaderboard data invalid:", data);
            setError(data.message || "Failed to load leaderboard");
        }
      })
      .catch(err => setError("Network error"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-white text-center p-10">Loading leaderboard...</div>;
  if (error) return <div className="text-red-500 text-center p-10">Error: {error}</div>;

  return (
    <div className="p-6 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">🏆 Leaderboard</h1>
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-[#1f2937]">
                <tr>
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Score</th>
                </tr>
            </thead>
            <tbody>
                {users.map((u, i) => (
                <tr key={u._id} className="border-b border-gray-700 hover:bg-gray-800">
                    <td className="p-3">#{i + 1}</td>
                    <td className="p-3 font-semibold">{u.name || "Unknown"}</td>
                    <td className="p-3 text-indigo-400">{u.leetcodeUsername}</td>
                    <td className="p-3 font-bold text-yellow-400">{u.totalScore}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  );
}
