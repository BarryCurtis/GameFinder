import LogIn from "../security/login";
import UpdateProfile from "../security/updateProfile";
import { useAuth } from "../security/authContext";
import LogOut from "../security/LogOut";
const Account = () => {
  const { currentUser } = useAuth();
  return (
    <div className="account">
      <>
        {currentUser ? (
          <>
            <h2>User Account {currentUser && currentUser.email}</h2>
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
