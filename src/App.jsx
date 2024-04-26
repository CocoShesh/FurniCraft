import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bahay from "./components/Bahay";
import Login from "./components/Login-user/ImageCarousel";
import SignUp from "./components/Login-user/SIgnUp";
// import ProductPage from "./components/page/Product_Page";
// import Categories from "./components/page/Categories";
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
            {/* 
            <Route exact path="/product-page" element={<ProductPage />} />
            <Route
              path="/product-page/:productName"
              element={<ProductPage />}
            />

            <Route path="/product-page/" element={<ProductPage />} /> */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </ProductProviderContext>
      </CartProvider>
      <FloatButton.BackTop />
    </Router>
  );
}

export default App;
