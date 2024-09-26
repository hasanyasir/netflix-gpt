import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/PK-en-20240923-TRIFECTA-perspective_76fd0616-394d-4d33-acdb-85e078b183f8_large.jpg
"
          alt="background"
        ></img>
      </div>
      <form className="text-white absolute bg-black bg-opacity-70 w-3/12 px-12 py-6 my-48 mx-auto left-0 right-0 rounded-lg">
        <h1 className="text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="px-4 py-2 my-2 w-full bg-gray-800"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="px-4 py-2 my-2 w-full bg-gray-800"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          className="px-4 py-2 my-2 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        ></input>
        <button className="bg-red-700 p-2 my-2 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h1 className="p-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix. Sign Up now."
            : "Already registered. Sign In."}
        </h1>
      </form>
    </div>
  );
};

export default Login;
