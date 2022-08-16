import { useAuth } from "./authContext";
import { MdLogout } from "react-icons/md";

const LogOut = () => {
  const { signout } = useAuth();

  return (
    <div
      className="logout"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <button onClick={signout}>
        <MdLogout />
      </button>
      <p style={{ color: "#0a2145" }}>Log Out</p>
    </div>
  );
};

export default LogOut;
