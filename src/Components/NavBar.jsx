import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" to="/events">
            Events
          </Link>
          <Link underline="hover" color="inherit" to="/account">
            Account
          </Link>
        </Breadcrumbs>
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
