import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import useAOS from "../../../hooks/UseAnimations";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
const NavigationDrawer = ({ showDrawer }) => {
  useAOS();
  const location = useLocation();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = "auto";
      };
    }
  }, []);
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-start items-start lg:hidden max-lg:visible bg-[#0505054d] z-10 ">
        <section
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="w-[20rem] h-full  flex flex-col justify-between text-white select-none pt-20 relative bg-[#111827]"
        >
          <div
            onClick={showDrawer}
            className=" absolute -right-10 text-4xl top-1 w-10 h-10 cursor-pointer bg-[#111827]"
          >
            <IoIosClose className="hover:text-yellow-300 " />
          </div>
          <section className=" inline-grid gap-5 w-full items-center justify-center   ">
            <Link
              to="/categories"
              className={` font-bold uppercase text-[25px] hover:text-yellow-300 ${
                location.pathname === "/categories" && "text-yellow-300"
              }`}
            >
              Categories
            </Link>
            <Link
              to="/product-page"
              className={`font-bold uppercase text-[25px] hover:text-yellow-300 ${
                location.pathname.startsWith("/product-page")
                  ? "text-yellow-300"
                  : ""
              }`}
            >
              Product Page
            </Link>

            <Link to="/login">
              <h3
                className={` font-bold uppercase text-[25px] hover:text-yellow-300 ${
                  location.pathname === "/login" && "text-yellow-300"
                }`}
              >
                Register
              </h3>
            </Link>
            <Link to="/register">
              <h3
                className={` font-bold uppercase text-[25px]  hover:text-yellow-300  ${
                  location.pathname === "/register" && "text-yellow-300"
                }`}
              >
                Login
              </h3>
            </Link>
          </section>
          <section className="flex items-center gap-5 pb-5 px-14 group text-3xl   ">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
          </section>
        </section>
      </section>
    </>
  );
};

export default NavigationDrawer;
