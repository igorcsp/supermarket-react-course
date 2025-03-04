import { NavLink } from "react-router-dom";

export default function Nav() {
  const getClass = ({ isActive }) => {
    return isActive ? "nav-active" : "";
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={getClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getClass} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={getClass} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
