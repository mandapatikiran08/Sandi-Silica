import React from "react";
import { useAuthStore } from "../stores/authStore";

const Dashboard = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      <header className="w-full max-w-3xl flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <main className="w-full max-w-3xl bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome, {user?.email}!
        </h2>
        <p className="text-gray-700">
          This is your demo dashboard page. You can add any content here, like
          stats, user info, or links to other pages.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
