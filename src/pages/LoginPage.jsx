import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useAuthStore } from '../context/AuthContext'; 
import { Link } from 'react-router-dom'; 
// same yahan bhi useAuthStore ko replace kar dena harsh
//bhai ye folders alg hone k wajah se problem aa rha tha isiliye tere wale code pe hi chor rha hu

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-600 p-3 rounded-full shadow-lg">
            <LockClosedIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mt-3 text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Please sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="text-right text-sm mt-1">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
