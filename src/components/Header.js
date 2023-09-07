import React from "react";
import PROFILE_IMG from "../assets/user.png";
import { signOut } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const hanldeSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        alt="netflix logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <div className="flex   items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            alt="user-icons"
            src={user?.photoURL}
          />
          <button
            onClick={hanldeSignOut}
            className="text-gray-200  bg-red-500 p-1 rounded-3xl">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
