import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="links">
      <nav className="navbar">
        {/* <a
          href="/"
          style={{
            color: "white",
            backgroundColor: "#0a2145",
            borderRadius: "8px",
          }}
        >
          Home
        </a>
        <a
          href="/events"
          style={{
            color: "white",
            backgroundColor: "#0a2145",
            borderRadius: "8px",
          }}
        >
          Events
        </a>
        <a
          href="/account"
          style={{
            color: "white",
            backgroundColor: "#0a2145",
            borderRadius: "8px",
          }}
        >
          Account
        </a> */}

        <Link underline="hover" color="inherit" to="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" to="/events">
          Events
        </Link>
        <Link underline="hover" color="inherit" to="/account">
          Account
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;

{
  /* <Link to="/">Home</Link>
<Link to="/events">Events</Link>
<Link to="/account">Account</Link> */
}
