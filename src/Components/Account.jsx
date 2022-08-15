import LogIn from "../security/login";
import UpdateProfile from "../security/updateProfile";
import { useAuth } from "../security/authContext";
import LogOut from "../security/LogOut";
const Account = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <>
      {currentUser ? (
        <>
          <p>Welcome {currentUser && currentUser.email}</p> <UpdateProfile />{" "}
          <LogOut />{" "}
        </>
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default Account;
