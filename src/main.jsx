import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import StoreFront from "./components/StoreFront.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ProductDetails from './components/ProductDetails.jsx'
import ProductDelivery from "./components/ProductDelivery.jsx";
import NotFound from "./error/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<StoreFront />}></Route>
        <Route path="/products/:id/" element={<ProductDetails />}>
          <Route path="delivery" element={<ProductDelivery />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
