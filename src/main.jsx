import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetailInfo from "./components/ProductDetailInfo.jsx";
import ProductDetailNutrition from "./components/ProductDetailNutrition.jsx";
import ProductDetailStorage from "./components/ProductDetailStorage.jsx";

function App() {
  const [cart, setCart] = useState(() => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <Products
                cart={cart}
                onProductAdd={handleProductAdd}
                onProductDelete={handleProductDelete}
              />
            }
          />
          <Route path="/products/:id/" element={<ProductDetails />}>
            <Route
              path=""
              element={<ProductDetailInfo onProductAdd={handleProductAdd} />}
            />
            <Route path="nutrition" element={<ProductDetailNutrition />} />
            <Route path="storage" element={<ProductDetailStorage />} />
          </Route>
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
