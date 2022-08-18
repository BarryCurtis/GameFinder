import LogIn from "../security/login";
import UpdateProfile from "../security/updateProfile";
import { useAuth } from "../security/authContext";
import LogOut from "../security/LogOut";
import { Link } from "react-router-dom";
import { getUserByID } from "../Utility/api";
import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
const Account = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (currentUser) {
      getUserByID(currentUser.uid)
        .then((data) => {
          setUserName(data.username);
        })
        .catch((err) => {
          setUserData(false);
        });
    }
  }, [currentUser]);

  if (!userData) {
    return <UserDetails />;
  }

  return (
    <div className="account">
      <>
        {currentUser ? (
          <>
            <h3>User Account: {currentUser && userName}</h3>
            <Link to={`/user/Booked-events/${currentUser.uid}`}>
              <button className="bookedevents">Games Booked</button>
            </Link>
            <Link to={`/user/Created-events/${currentUser.uid}`}>
              <button className="bookedevents">Gmes Organised</button>
            </Link>
            <UpdateProfile />
            <LogOut />
          </>
        ) : (
          <LogIn />
        )}
      </>
    </div>
  );
};

export default Account;
