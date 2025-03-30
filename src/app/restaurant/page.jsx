"use client";
import React, { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";

const Restaurant = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? <RestaurantLogin /> : <RestaurantSignUp />}
      <button
        className="text-blue-500 p-2 rounded-md"
        onClick={() => setIsLogin(!isLogin)}
      >
        {!isLogin ? "Already have an account?" : "Don't have an account?"}
      </button>
    </>
  );
};

export default Restaurant;
