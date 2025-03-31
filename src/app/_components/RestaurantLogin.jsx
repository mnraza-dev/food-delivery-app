import React from 'react';

const RestaurantLogin = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="p-8 flex flex-col justify-center items-center gap-6 bg-white rounded-lg shadow-md w-full sm:w-96">
        <h3 className="text-3xl font-semibold text-gray-800">Login</h3>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            className="bg-blue-500 p-3 rounded-md text-white font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="text-sm mt-4 text-center text-gray-600">
          <span>Don't have an account? </span>
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogin;
