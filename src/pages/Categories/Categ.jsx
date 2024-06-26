import React, { useState } from "react";
import { products } from "./Data.js";
import { Segmented } from "antd";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

const Categories = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts = products.filter(product => {
    if (filter === "All") {
      return true;
    } else {
      return product.categ === filter;
    }
  });

  return (
    <>
      <Header />
      <section className="bg-[#111827] flex items-center justify-center flex-col w-full">
        <div className="mx-14 pb-20   pt-10 2xl:w-[1500px] text-white max-md:w-full max-lg:w-full max-lg:mx-auto  max-lg:px-5">
          <div className="flex w-full max-md:w-auto ">
            <p className="text-xl font-bold cursor-pointer text-[#b2b2b2b6] hover:text-[#f7cd7c] transition-colors duration-200 ease-in-out">
              <Link to="/">
                <span className=" mr-1 cursor-pointer ">&lt; </span> Home
              </Link>
            </p>
          </div>

          <section className=" w-full mx-auto flex mt-10 justify-center items-center">
            <Segmented
              options={[
                "All",
                "Furnitures",
                "Electronics",
                "Kitchen",
                "Chairs",
                "Lamps",
                "Skin Care",
              ]}
              value={filter}
              onChange={setFilter}
              className=" text-xl  font-sans   font-semibold bg-red-300 max-md:w-auto max-md:flex max-md:items-center max-md:text-[18px]    max-md:pr-3 max-md:py-2 max-md:rounded-md max-md:font-bold max-md:uppercase overflow-scroll  max-md:h-12  "
            />
          </section>

          <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mt-20 gap-7 2xl:grid-cols-4 w-full max-md:grid-cols-1  max-md:px-3 ">
            {filteredProducts.map((product, index) => (
              <div key={index} className=" max-md:h-full max-md:p-auto  ">
                <LazyLoadImage
                  src={product.src}
                  alt={product.name}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  className=" 2xl:w-full  bg-white brightness-90 hover:brightness-100 rounded-lg max-md:h-[300px] w-full max-md:object-contain max-lg:object-contain"
                />
                <p className="mt-5  ">{product.name}</p>
                <p className="font-bold text-[#f7cd7c] ">{product.price}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default Categories;
