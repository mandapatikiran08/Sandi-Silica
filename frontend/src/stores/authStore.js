import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isLoggingIn: false,

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/register", data);
      console.log("abc");
      set({ user: res.data });
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Enter valid credentials");
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    console.log(data);
    try {
      const res = await axiosInstance.post("/auth/login", data);
     // console.log(user);
      set({ user: res.data });
      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Enter valid credentials");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: () => {
    set({ user: null });
    toast.success("Logged out successfully!");
  },
}));
