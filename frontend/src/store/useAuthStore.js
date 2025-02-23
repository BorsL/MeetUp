import { create } from 'zustand';
import { axiousInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiousInstance.get("/api/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiousInstance.post("/api/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({isLoggingIn: true});
    try {
        const res = await axiousInstance.post("/api/auth/login", data);
        set({ authUser: res.data})
        toast.success("Logged");
    } catch (error) {
        toast.error(error.response.data.message);
    } finally {
        set({ isLoggingIn: false});
    }
  },

  logout: async (data) => {
    try {
        await axiousInstance.post("/api/auth/logout", data);
        set({ authUser: null})
        toast.success("Logout");
    } catch (error) {
        toast.error(error.response.data.message);
    }
  }
}));
