import Product from "../components/Product";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(import.meta.env.VITE_BASE_URL);

  useEffect(() => {
    get("supermarket.json")
      .then((data) => setProducts(data))
      .catch((error) => console.log("Could not load products", error));
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          ))}
      </div>
    </div>
  );
}
