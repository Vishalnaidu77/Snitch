import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Image */}
      <div className="hidden w-1/2 lg:block relative">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Model" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-12 lg:p-24 text-white">
          <div className="text-3xl font-light tracking-widest uppercase">
            Maison
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Timeless Style.<br/>Crafted for Every Season.
            </h1>
            <p className="text-white/80 max-w-md font-light text-sm lg:text-base">
              Discover a world of minimal, sophisticated editorial fashion. Join us to curate your personal wardrobe with pieces designed for longevity and effortless elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="lg:hidden text-2xl font-light tracking-widest uppercase mb-12 text-center">
            Maison
          </div>
          
          <h2 className="text-3xl font-light mb-2 text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 text-sm mb-10 font-light">
            Enter your details to access your account.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                className="peer w-full border-b border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-colors rounded-none shadow-none" 
                placeholder=" " 
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-3 -translate-y-5 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-black font-light cursor-text"
              >
                Email address
              </label>
            </div>

            <div className="relative group">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                className="peer w-full border-b border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-colors rounded-none shadow-none pr-10" 
                placeholder=" " 
                required
              />
              <label 
                htmlFor="password" 
                className="absolute left-0 top-3 -translate-y-5 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-black font-light cursor-text"
              >
                Password
              </label>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-3 text-gray-400 hover:text-black transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-black checked:border-black transition-colors cursor-pointer" />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-xs text-gray-500 font-light group-hover:text-black transition-colors">Remember me</span>
              </label>
              
              <a href="#" className="text-xs text-gray-500 hover:text-black font-light transition-colors underline-offset-4 hover:underline">
                Forgot password?
              </a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white py-3.5 mt-4 text-sm font-light hover:bg-gray-900 transition-all active:scale-[0.99] rounded-xl flex justify-center items-center gap-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-10 mb-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-4 text-gray-400 font-light uppercase tracking-wider">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-light group">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-light group">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.365 7.027c-.015-.008-.031-.013-.046-.021.054-.33.244-1.026.702-1.558.468-.545 1.139-.884 1.777-.948.067.848-.22 1.656-.632 2.193-.418.544-1.109.967-1.801 1.011v.006c-.021-.227-.015-.461.001-.683zm3.178 3.513c-.025-1.748 1.459-2.585 1.523-2.624-1.127-1.636-2.883-1.865-3.52-1.89-1.503-.153-2.923.896-3.693.896-.77 0-1.939-.884-3.156-.86-1.579.023-3.03.921-3.842 2.336-1.643 2.853-.42 7.065 1.18 9.387.778 1.131 1.697 2.404 2.923 2.358 1.173-.046 1.614-.761 3.036-.761 1.42 0 1.815.761 3.034.739 1.258-.025 2.053-1.161 2.827-2.296.892-1.31 1.256-2.58 1.272-2.646-.029-.011-2.556-.99-2.584-3.901z"/></svg>
              Apple
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-12 font-light">
            Don't have an account?{' '}
            <Link to="/register" className="text-black font-normal hover:underline underline-offset-4 transition-all">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;