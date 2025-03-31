import React, { useState } from 'react';
import Link from 'next/link';

const RestaurantSignUp = () => {
  // State for form fields and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    // Here you would typically handle the form submission, e.g., call an API
    setErrorMessage(''); // Clear error message on successful validation
    console.log('Form Submitted!', { email, password });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="p-8 flex flex-col justify-center items-center gap-6 bg-white rounded-lg shadow-xl w-full sm:w-96">
        <h3 className="text-3xl font-semibold text-gray-800">Sign Up</h3>

        {/* Form with error handling */}
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md border border-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md border border-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-3 rounded-md border border-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />

          {/* Display error message if passwords don't match */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          <button
            className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-3 rounded-md text-white font-semibold shadow-lg hover:from-teal-500 hover:via-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        {/* Link to login page */}
        <div className="text-sm mt-4 text-center text-gray-600">
          <span>Already have an account? </span>
          <Link href="/login" className="text-indigo-600 hover:underline cursor-pointer">
              Login
         
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSignUp;
