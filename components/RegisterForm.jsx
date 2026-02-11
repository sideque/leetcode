'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    leetcodeUsername: '',
    easyProblems: 0,
    mediumProblems: 0,
    hardProblems: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Registration Data:', formData);
    alert('Registration submitted! Check console for data.');
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F1A] to-[#1a1f35] flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        <div className="bg-[#171c2d]/90 rounded-2xl p-10 shadow-2xl border border-indigo-500/10">

          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
              LeetBoard
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Join LeetBoard
            </h1>
            <p className="text-slate-400 text-sm">
              Register to track your LeetCode progress
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 bg-[#0f172a]/80 border-[1.5px] border-indigo-500/20 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                LeetCode Username
              </label>
              <input
                type="text"
                value={formData.leetcodeUsername}
                onChange={(e) => handleInputChange('leetcodeUsername', e.target.value)}
                placeholder="Enter your LeetCode username"
                required
                className="w-full px-4 py-3 bg-[#0f172a]/80 border-[1.5px] border-indigo-500/20 rounded-lg text-white text-sm placeholder-slate-600"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4">

              <div>
                <label className="block text-xs font-medium text-green-500 mb-2">
                  Easy
                </label>
                <input
                  type="number"
                  value={formData.easyProblems}
                  onChange={(e) =>
                    handleInputChange('easyProblems', parseInt(e.target.value) || 0)
                  }
                  min="0"
                  required
                  className="w-full px-4 py-3 bg-[#0f172a]/80 border-[1.5px] border-indigo-500/20 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-500 mb-2">
                  Medium
                </label>
                <input
                  type="number"
                  value={formData.mediumProblems}
                  onChange={(e) =>
                    handleInputChange('mediumProblems', parseInt(e.target.value) || 0)
                  }
                  min="0"
                  required
                  className="w-full px-4 py-3 bg-[#0f172a]/80 border-[1.5px] border-indigo-500/20 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-red-500 mb-2">
                  Hard
                </label>
                <input
                  type="number"
                  value={formData.hardProblems}
                  onChange={(e) =>
                    handleInputChange('hardProblems', parseInt(e.target.value) || 0)
                  }
                  min="0"
                  required
                  className="w-full px-4 py-3 bg-[#0f172a]/80 border-[1.5px] border-indigo-500/20 rounded-lg text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-7 px-4 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg"
            >
              Register Now
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-slate-400">
            Already registered?{' '}
            <Link
              href="/leaderboard"
              className="text-indigo-500 font-medium hover:text-purple-500"
            >
              View Leaderboard
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
