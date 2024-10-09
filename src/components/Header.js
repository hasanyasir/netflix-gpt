import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gptSearch = useSelector((store) => store.gpt.toggleGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when the component unmounts
    return () => unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex justify-between ">
          <button
            className="px-4 mx-4 my-8 h-12 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {gptSearch ? "Home" : "GPT Search"}
          </button>
          {/* <img
            className="w-10 h-8 my-4"
            src={user?.photoURL}
            alt="user-photo"
          ></img> */}
          <label className="w-12 mx-2 my-8 py-4 text-white font-bold justify-center">
            {user?.displayName}
          </label>
          <button className="text-white font-bold p-4" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
