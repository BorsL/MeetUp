import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { IoEyeOff, IoEye } from "react-icons/io5"; // Eye icons for password toggle
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"; // For navigation to the login page

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

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
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left Side - Signup Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">Sign Up</h1>
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 p-3 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              onChange={(e) =>
                setForm({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              onChange={(e) =>
                setForm({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-12 p-3 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none bg-gray-800 text-white placeholder-gray-400"
              onChange={(e) =>
                setForm({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-400 hover:text-teal-300 focus:outline-none"
            >
              {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-400 text-gray-900 p-3 rounded-md hover:bg-teal-300 transition font-semibold"
            disabled={isSigningUp}
          >
            {isSigningUp ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {/* Link to Login */}
        <p className="mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to="/app/login" className="text-teal-400 hover:underline">
            Log In
          </Link>
        </p>
      </div>

      {/* Right Side - Event Description (Hidden on small screens) */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center text-center bg-gray-800 p-8">
        <h2 className="text-3xl font-bold mb-4 text-teal-400">Welcome to EventApp</h2>
        <p className="text-lg text-gray-300">
          Join our platform to explore and create amazing events with ease.
          Sign up today and get started!
        </p>
        <div className="mt-6 p-4 border border-teal-400 rounded-md bg-gray-900">
          <h3 className="text-xl font-semibold text-teal-400">Exclusive Features:</h3>
          <ul className="text-left mt-2 space-y-2 text-gray-300">
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