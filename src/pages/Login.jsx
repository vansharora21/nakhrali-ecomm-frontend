import React, { useState, useEffect } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center p-6">
      <form 
        onSubmit={onSubmitHandler} 
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 w-full max-w-md shadow-2xl shadow-black/30"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h1 className="prata-regular text-4xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-bold">
              {currentState}
            </h1>
            <div className="w-12 h-1 bg-gradient-to-r from-white/50 to-transparent rounded-full" />
          </div>
          <p className="text-white/70 text-lg font-medium">Welcome back! Please {currentState.toLowerCase()} to continue.</p>
        </div>

        {/* Fields */}
        <div className="space-y-6">
          {currentState === 'Login' ? null : (
            <input 
              className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-white/60 focus:border-white/50 focus:outline-none transition-all duration-300 hover:bg-white/10 text-lg font-medium" 
              placeholder="Full Name" 
              required 
              type="text" 
            />
          )}
          <input 
            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-white/60 focus:border-white/50 focus:outline-none transition-all duration-300 hover:bg-white/10 text-lg font-medium" 
            placeholder="Email Address" 
            required 
            type="email" 
          />
          <input 
            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-white/60 focus:border-white/50 focus:outline-none transition-all duration-300 hover:bg-white/10 text-lg font-medium" 
            placeholder="Password" 
            required 
            type="password" 
          />
        </div>

        {/* Bottom links */}
        <div className="w-full flex justify-between items-center text-sm mt-6 pt-6 border-t border-white/10">
          <p className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer font-medium">Forgot Password?</p>
          {currentState === 'Login' ? (
            <p 
              onClick={() => setCurrentState('Sign Up')} 
              className="text-white/80 hover:text-white font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
            >
              Create account
            </p>
          ) : (
            <p 
              onClick={() => setCurrentState('Login')} 
              className="text-white/80 hover:text-white font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
            >
              Login Here
            </p>
          )}
        </div>

        {/* Submit button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-8 py-5 mt-8 rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] text-lg shadow-lg">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
