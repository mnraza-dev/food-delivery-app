import React, { useState } from 'react';
import Link from 'next/link';

const RestaurantSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordStrengthRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!passwordStrengthRegex.test(password)) {
      setErrorMessage('Password must be at least 8 characters long and include both letters and numbers.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    setErrorMessage('');
    console.log('Form Submitted!', { email, password });
  };

  const handleInputChange = () => {
    if (
      emailRegex.test(email) &&
      passwordStrengthRegex.test(password) &&
      password === confirmPassword
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="p-8 flex flex-col justify-center items-center gap-6 bg-white rounded-lg shadow-xl w-full sm:w-96">
        <h3 className="text-3xl font-semibold text-gray-800">Sign Up</h3>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange();
            }}
            className="p-3 rounded-md border border-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
            className="p-3 rounded-md border border-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              handleInputChange();
            }}
            className="p-3 rounded-md border border-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <button
            className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-3 rounded-md text-white font-semibold shadow-lg hover:from-teal-500 hover:via-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all cursor-pointer"
            type="submit"
            disabled={isSubmitDisabled}
          >
            Sign Up
          </button>
        </form>
        <div className="text-sm mt-4 text-center text-gray-600">
          <span>Already have an account? </span>
          <Link href="/restaurant/login">
            <span className="text-indigo-600 hover:underline cursor-pointer">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSignUp;
