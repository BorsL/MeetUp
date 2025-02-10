import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CreateEvent from './pages/CreateEvent';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Toaster } from "react-hot-toast";
import { useAuthStore } from './store/useAuthStore';
import { Loader } from 'lucide-react';
import AppLayout from './AppLayout';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="text-black font-extrabold">
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* App Routes with Nested Routes */}
        <Route path="/app" element={<AppLayout />}>
          {/* The "index" route renders when you visit "/app" */}
          <Route index element={<HomePage />} />
          {/* Child routes (no leading slash, so they're relative to "/app") */}
          <Route path="create" element={<CreateEvent />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
