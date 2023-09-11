import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { toggleGptSearchView } from "../utils/gptSlice";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const hanldeSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

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
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" alt="netflix logo" src={LOGO} />

      {user && (
        <div className="flex   items-center gap-2">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-gray-900 text-white rounded">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.indetifier} value={lang.indetifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="text-white mx-4 text-2xl my-2 px-4 bg-gray-900 rounded   py-2">
            {showGptSearch ? <AiFillHome /> : <AiOutlineSearch />}
          </button>
          <img
            className="w-10 h-10 rounded"
            alt="user-icons"
            src={user?.photoURL}
          />
          <button
            onClick={hanldeSignOut}
            className="text-gray-200 text-3xl bg-red-600 p-1 rounded">
            <RiLogoutBoxRFill />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
