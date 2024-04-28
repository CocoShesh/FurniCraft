import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bahay from "./components/Bahay";
import Login from "./components/Login-user/Login";
import SignUp from "./components/Login-user/SIgnUp";
import Product_Page from "./pages/Product-page/ProductPage";
import Categories from "./pages/Categories/Categ";
import { ProductProviderContext } from "./context/ProductProviderContext";
import { CartProvider } from "./context/CartContext";
import { FloatButton } from "antd";

function App() {
  return (
    <Router>
      <CartProvider>
        <ProductProviderContext>
          <Routes>
            <Route path="/" element={<Bahay />} />

            <Route exact path="/product-page" element={<Product_Page />} />
            <Route
              path="/product-page/:productName"
              element={<Product_Page />}
            />

            <Route path="/product-page/" element={<Product_Page />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </ProductProviderContext>
      </CartProvider>
      <FloatButton.BackTop />
    </Router>
  );
}

export default App;
