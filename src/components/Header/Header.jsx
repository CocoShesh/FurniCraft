import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Headroom from "react-headroom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Badge } from "antd";
import { BsCartFill } from "react-icons/bs";
import AddToCartDrawer from "./Drawer/AddToCartDrawer";
import NavigationDrawer from "./Drawer/NavigationDrawer";
import CartContext from "../../context/CartContext";
function Header() {
  const [isOpenCartDrawer, isSetOpenCartDrawer] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [isOpen, isSetOpen] = useState(false);
  const location = useLocation();
  const showDrawer = () => {
    isSetOpen(prev => !prev);
  };

  const handleAddToCart = () => {
    isSetOpenCartDrawer(prev => !prev);
  };
  return (
    <>
      <Headroom>
        <header className=" w-full h-14 px-10 max-sm:pl-2 py-10 flex max-lg:px-5 justify-center items-center   bg-[#111827]  text-white ">
          <section className="2xl:w-[1500px] flex  gap-5   w-full ">
            <Link to="/">
              <img
                src="/logo1.png"
                className="h-20  max-sm:h-28 object-contain w-full"
                alt=""
              />
            </Link>
            <nav className="w-full flex justify-between  ">
              <section className="flex items-center justify-center gap-5  ">
                <Link
                  to="/categories"
                  className={` font-bold uppercase text-[18px] max-lg:hidden  transition-colors duration-300 ease-out hover:text-yellow-300  ${
                    location.pathname === "/categories" && "text-yellow-300"
                  } `}
                >
                  Categories
                </Link>
                <Link
                  to="/product-page"
                  className={` font-bold uppercase text-[18px] max-lg:hidden  transition-colors duration-300 ease-out hover:text-yellow-300  ${
                    location.pathname.startsWith("/product-page") &&
                    "text-yellow-300"
                  } `}
                >
                  Product Page
                </Link>
              </section>
              <section className="flex gap-5 items-center ">
                <Link to="/login">
                  <h3 className="font-sans text-[18px] font-bold cursor-pointer uppercase max-lg:hidden transition-colors duration-300 ease-out hover:text-yellow-300">
                    Login
                  </h3>
                </Link>
                <Link to="/register">
                  <h3 className="font-sans text-[18px] font-bold cursor-pointer uppercase max-lg:hidden transition-colors duration-300  ease-out hover:text-yellow-300">
                    Sign Up
                  </h3>
                </Link>

                <section className="flex relative ">
                  <Badge count={cartItems.length}>
                    <BsCartFill
                      className="text-[22px] hover:scale-125 cursor-pointer text-white"
                      onClick={handleAddToCart}
                    />
                  </Badge>
                </section>
                <GiHamburgerMenu
                  className="text-2xl mt-1 max-lg:visible lg:hidden cursor-pointer"
                  onClick={showDrawer}
                />
              </section>
            </nav>
          </section>
        </header>
      </Headroom>
      {isOpen && <NavigationDrawer showDrawer={showDrawer} />}
      {isOpenCartDrawer && <AddToCartDrawer handleOpen={handleAddToCart} />}
    </>
  );
}

export default Header;
