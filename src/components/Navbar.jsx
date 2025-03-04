import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  
  const getIsActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink className={getIsActive} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={getIsActive} to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={getIsActive} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
