import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="homelink">
        Home
      </Link>
      <ul>
        <li className="active">
          <CustomLink to="/events" className="eventslink">
            Events List
          </CustomLink>
        </li>
        <li className="active">
          <CustomLink to="/account" className="accountlink">
            Account
          </CustomLink>
        </li>
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
