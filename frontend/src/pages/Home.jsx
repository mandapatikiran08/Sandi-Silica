import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-orange-500 text-white px-6 py-10 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold">Sandy Silica Technologies</h1>

        <div className="space-x-5">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Signup
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
          Sandy Silica Technologies
        </h2>

        {/* Company Description */}
        <section className="bg-white p-12 rounded-lg shadow-lg w-full max-w-5xl mx-auto text-left">
          <h3 className="text-4xl font-bold mb-8 text-gray-800">About Us</h3>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
            We design and develop high-quality websites that go beyond just an online presence.
            Our goal is to help your business attract the right audience, increase engagement
            and convert visitors into paying customers. Every website we create is strategically
            built to generate consistent revenue and support long-term growth.
          </p>

          {/* Contact Details */}
          <div className="mt-8">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h4>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span> 9959467438
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Email:</span> mandapatikiran.ss@gmail.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
