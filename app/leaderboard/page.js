"use client";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, i) => (
          <tr key={u._id}>
            <td>{i + 1}</td>
            <td>{u.name}</td>
            <td>{u.leetcodeUsername}</td>
            <td>{u.totalScore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
