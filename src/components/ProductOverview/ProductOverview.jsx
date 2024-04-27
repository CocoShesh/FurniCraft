import React from "react";
import { Link } from "react-router-dom";
export default function ImageGallery() {
  return (
    <>
      <section className="flex h-fit  max-md:px-3 items-center justify-center    w-full py-10 px-10 ">
        <section className="2xl:w-[1500px] flex gap-3  h-fit  max-lg:flex-col ">
          <section className="grid grid-cols-2 gap-5 max-md:gap-3 w-full max-sm:h-full max-md:grid-cols-1  ">
            <div className=" grid lg:h-[600px]  ">
              <Link to="/product-page/">
                <img
                  src="https://minimalist-e-commerce.vercel.app/static/media/home-img-1.3de7da0f1e4634169c62.jpg"
                  alt="Two each of gray, white, and black shirts laying flat"
                  className="object-cover rounded-xl h-[600px] max-md:h-[350px] w-full brightness-75 hover:brightness-100 transition duration-500 ease-in-out cursor-pointer"
                />
              </Link>
            </div>
            <div className=" grid  lg:h-[600px]   ">
              <Link to="/product-page/">
                <img
                  src="https://minimalist-e-commerce.vercel.app/static/media/home-img-2.4daa711cfda65062efd0.jpg"
                  alt="Two each of gray, white, and black shirts laying flat"
                  className="object-cover rounded-xl h-[600px] max-md:h-[350px] w-full brightness-75  hover:brightness-100 transition duration-500 ease-in-out cursor-pointer"
                />
              </Link>
            </div>
          </section>
          <div className="grid grid-row-2 gap-3 lg:grid-cols-1  md:grid-cols-2  lg:w-[500px] lg:h-[600px] md:h-[450px]  max-md:w-full  max-md:h-[700px] ">
            <Link to="/product-page/">
              <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-3.60734311499ba1dbbc41.jpg"
                alt="Two each of gray, white, and black shirts laying flat"
                className="object-cover rounded-xl h-full w-full max-lg:w-full max-md:h-[350px]  brightness-75 hover:brightness-100 transition duration-500 ease-in-out cursor-pointer"
              />
            </Link>
            <Link to="/product-page/">
              {" "}
              <img
                src="https://minimalist-e-commerce.vercel.app/static/media/home-img-4.672d1d0d7656e2a778f6.jpg"
                alt="Two each of gray, white, and black shirts laying flat"
                className="object-cover rounded-xl h-full  brightness-75 w-full max-md:h-[350px]  hover:brightness-100 transition duration-500 ease-in-out cursor-pointer"
              />
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}
