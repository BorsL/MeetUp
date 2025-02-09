import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { IoEyeOff, IoEye } from "react-icons/io5"; // Eye icons for password toggle
import { useAuthStore } from "../store/useAuthStore";
import toast from 'react-hot-toast';  

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Use the consistent naming "isSigningUp"
  const { signUp, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return toast.error("Full name is required");
    }

    if (!formData.email.trim()) {
      return toast.error("Email is required");
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      return toast.error("Please enter a valid email address");
    }

    if (!formData.password.trim()) {
      return toast.error("Password is required");
    }

    if (formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }    
  
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) {
      signUp(formData);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Signup Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Sign Up</h1>
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 p-3 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm text-white"
              onChange={(e) => setForm({ ...formData, fullName: e.target.value })}
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm text-white"
              onChange={(e) => setForm({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-12 p-3 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm text-white"
              onChange={(e) => setForm({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            disabled={isSigningUp}  // Optionally disable the button during signup
          >
            {isSigningUp ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>

      {/* Right Side - Event Description */}
      <div className="w-1/2 flex flex-col justify-center items-center text-center bg-blue-600 text-white p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to EventApp</h2>
        <p className="text-lg">
          Join our platform to explore and create amazing events with ease.
          Sign up today and get started!
        </p>
        <div className="mt-6 p-4 border border-white rounded-md bg-white">
          <h3 className="text-xl font-semibold text-blue-600">Exclusive Features:</h3>
          <ul className="text-left mt-2 space-y-2 text-gray-800">
            <li>✅ Create and Manage Events</li>
            <li>✅ Connect with People</li>
            <li>✅ Secure and Fast Platform</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
