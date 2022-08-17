import { useAuth } from "../security/authContext";
import { getUserByID } from "../Utility/api";
import { guestUserIcon } from "../Images/card.images";
import { useState, useEffect } from "react";

const Header = () => {
  const { currentUser } = useAuth();
  const [userIcon, setUserIcon] = useState("");

  useEffect(() => {
    if (currentUser) {
      getUserByID(currentUser.uid).then((data) => {
        setUserIcon(data.profile_icon);
      });
    }
  }, []);

  return (
    <header>
      <h1 className="Title"> Game Finder</h1>
      {currentUser ? (
        <img className="userimage" src={userIcon} alt={currentUser.name}></img>
      ) : (
        <img className="userimage" src={guestUserIcon} alt="guest"></img>
      )}
    </header>
  );
};

export default Header;
