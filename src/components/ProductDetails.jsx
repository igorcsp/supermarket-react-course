import { useEffect, useState } from "react";
import { useParams, Outlet, NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});

  const { get } = useFetch(import.meta.env.VITE_BASE_URL);

  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const getActiveLink = ({ isActive }) => {
    return isActive ? "tab-active" : "";
  };

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
          className="product-details-image"
          alt="product name here"
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink className={getActiveLink} to="" end>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink className={getActiveLink} to="nutrition">
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink className={getActiveLink} to="storage">
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet context={product} />
      </div>
    </div>
  );
}
