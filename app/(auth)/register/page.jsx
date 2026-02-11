"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    leetcodeUsername: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md animate-fadeInUp">
        
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
        
        {/* Card Content */}
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          
          {/* Header Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl transform hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
            Join LeetBoard
          </h1>
          <p className="text-gray-600 text-center mb-8 animate-fadeIn animation-delay-200">
            Start your coding journey today
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name Field */}
            <div className="animate-fadeIn animation-delay-400">
              <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                Full Name
              </label>
              <div className={`relative transform transition-all duration-300 ${focusedField === 'name' ? 'scale-105' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-md opacity-0 transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-30' : ''}`}></div>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full p-4 border-2 border-gray-200 rounded-xl text-gray-800 bg-white/90 backdrop-blur-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
                  onChange={e => setForm({...form, name: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* LeetCode Username Field */}
            <div className="animate-fadeIn animation-delay-600">
              <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                LeetCode Username
              </label>
              <div className={`relative transform transition-all duration-300 ${focusedField === 'username' ? 'scale-105' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-0 transition-opacity duration-300 ${focusedField === 'username' ? 'opacity-30' : ''}`}></div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-mono">@</span>
                  <input
                    type="text"
                    placeholder="your_username"
                    value={form.leetcodeUsername}
                    onFocus={() => setFocusedField('username')}
                    onBlur={() => setFocusedField(null)}
                    className="relative w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl text-gray-800 bg-white/90 backdrop-blur-sm focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none"
                    onChange={e => setForm({...form, leetcodeUsername: e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group animate-fadeIn animation-delay-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Register Now
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 text-center animate-fadeIn animation-delay-1000">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <a 
                href="/login" 
                className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-bold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 inline-block"
              >
                Sign In →
              </a>
            </p>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-gray-200 animate-fadeIn animation-delay-1200">
            <div className="flex justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure
              </div>
              <div className="flex items-center gap-2 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Fast
              </div>
              <div className="flex items-center gap-2 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Trusted
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}