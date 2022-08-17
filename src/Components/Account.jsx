import LogIn from "../security/login";
import UpdateProfile from "../security/updateProfile";
import { useAuth } from "../security/authContext";
import LogOut from "../security/LogOut";
import { Link } from "react-router-dom";
import {getUserByID} from "../Utility/api";
import { useEffect,useState } from "react";
import UserDetails from './UserDetails';
const Account = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(true);
  useEffect(()=>{
    if(currentUser){
      getUserByID(currentUser.uid).catch(err=>{
        setUserData(false)
      })
    }
  },[currentUser])
  
  if(!userData){
   return <UserDetails />
  }

  return (
    <div className="account">
      <>
        {currentUser ? (
          <>
            <h2>User Account {currentUser && currentUser.email}</h2>
            <Link to={`/user/Booked-events/${currentUser.uid}`}>
              <button>Booked Event</button>
            </Link>
            <Link to={`/user/Created-events/${currentUser.uid}`}>
              <button>Your Events</button>
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
