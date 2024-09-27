import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const msg = validateFormData(
      !isSignInForm,
      !isSignInForm ? fullName.current.value : null,
      email.current.value,
      password.current.value
    );
    setErrorMessage(msg);

    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/33377461?s=48&v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white absolute bg-black bg-opacity-70 w-3/12 px-12 py-6 my-28 mx-auto left-0 right-0 rounded-lg"
      >
        <h1 className="text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            className="px-4 py-2 my-2 w-full bg-gray-800"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="px-4 py-2 my-2 w-full bg-gray-800"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          className="px-4 py-2 my-2 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        ></input>
        <h1 className="text-red-700 p2 my-4">{errorMessage}</h1>
        <button
          className="bg-red-700 p-2 my-4 w-full rounded-lg"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h1 className="p-2 my-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix. Sign Up now."
            : "Already registered. Sign In."}
        </h1>
      </form>
    </div>
  );
};

export default Login;
