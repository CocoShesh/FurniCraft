import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "antd";
import AddToCart from "./AddToCart";
function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className=" w-full h-14 px-10 max-sm:pl-2 py-10 flex max-lg:px-5 justify-center items-center   text-white ">
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
                  location.pathname === "/product-page" && "text-yellow-300"
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
              <Link to="/signup">
                <h3 className="font-sans text-[18px] font-bold cursor-pointer uppercase max-lg:hidden transition-colors duration-300  ease-out hover:text-yellow-300">
                  Sign Up
                </h3>
              </Link>

              <AddToCart />
              <GiHamburgerMenu
                className="text-2xl mt-1 max-lg:visible lg:hidden cursor-pointer"
                onClick={showDrawer}
              />
            </section>
          </nav>
        </section>
      </header>

      <Drawer placement="left" onClose={onClose} open={open}>
        <section className=" inline-grid gap-5 w-full items-center justify-center  mt-auto">
          <Link
            to="/categories"
            className={` font-bold uppercase text-[25px] ${
              location.pathname === "/categories" && "text-yellow-300"
            }`}
          >
            Categories
          </Link>
          <Link
            to="/product-page"
            className={` font-bold uppercase text-[25px] ${
              location.pathname === "/product-page" && "text-yellow-300"
            }`}
          >
            Product Page
          </Link>
          <Link to="/login">
            <h3
              className={` font-bold uppercase text-[25px] ${
                location.pathname === "/login" && "text-yellow-300"
              }`}
            >
              Login
            </h3>
          </Link>
        </section>
      </Drawer>
    </>
  );
}

export default Header;
