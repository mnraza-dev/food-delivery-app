import React from 'react';

const RestaurantLogin = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="p-8 flex flex-col justify-center items-center gap-6 bg-white rounded-lg shadow-xl w-full sm:w-96">
        <h3 className="text-3xl font-semibold text-gray-800">Login</h3>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
          <button
            className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-3 rounded-md text-white font-semibold shadow-lg hover:from-teal-500 hover:via-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="text-sm mt-4 text-center text-gray-600">
          <span>Don't have an account? </span>
          <a href="#" className="text-indigo-600 hover:underline cursor-pointer">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogin;
