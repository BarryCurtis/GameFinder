import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Header from "./Header";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="homelink">
        Home
      </Link>
      <ul>
        <CustomLink to="/events" className="eventslink">
          Events List
        </CustomLink>
        <CustomLink to="/account" className="accountlink">
          Account
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

// const NavBar = () => {
//   return (
// <div className="links">
//   <nav className="navbar">
//     <a
//       href="/"
//       style={{
//         color: "white",
//         backgroundColor: "#0a2145",
//         borderRadius: "8px",
//       }}
//     >
//       Home
//     </a>
//     <a
//       href="/events"
//       style={{
//         color: "white",
//         backgroundColor: "#0a2145",
//         borderRadius: "8px",
//       }}
//     >
//       Events
//     </a>
//     <a
//       href="/account"
//       style={{
//         color: "white",
//         backgroundColor: "#0a2145",
//         borderRadius: "8px",
//       }}
//     >
//       Account
//     </a>

//     <Link underline="hover" color="inherit" to="/">
//       Home
//     </Link>
//     <Link underline="hover" color="inherit" to="/events">
//       Events
//     </Link>
//     <Link underline="hover" color="inherit" to="/account">
//       Account
//     </Link>
//   </nav>
// </div>
// );
// };

// export default NavBar;

// {
// //   /* <Link to="/">Home</Link>
// // <Link to="/events">Events</Link>
// // <Link to="/account">Account</Link> */
// }
