import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function ImageGallery() {
  return (
    <>
      <section className="flex h-fit  max-md:px-3 items-center justify-center    w-full py-10 px-10 ">
        <section className="2xl:w-[1500px] flex gap-5  h-fit  max-lg:flex-col ">
          <section className="grid grid-cols-2 gap-5 max-md:gap-3 w-full max-sm:h-full max-md:grid-cols-1  ">
            <div className=" grid lg:h-[600px] relative  ">
              <Link to="/categories">
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src="https://minimalist-e-commerce.vercel.app/static/media/home-img-1.3de7da0f1e4634169c62.jpg"
                  alt="Two each of gray, white, and black shirts laying flat"
                  className="object-cover rounded-xl h-[600px] max-md:h-[350px] w-full   brightness-75    hover:brightness-100 transition duration-500 ease-in-out cursor-pointer"
                />
              </Link>
              <div className="absolute bottom-5 left-3  text-white font-bold text-4xl ">
                Live Comfortably
              </div>
            </div>
            <div className=" grid  lg:h-[600px] relative  ">
              <Link to="/categories">
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src="https://minimalist-e-commerce.vercel.app/static/media/home-img-2.4daa711cfda65062efd0.jpg"
                  alt="Two each of gray, white, and black shirts laying flat"
                  className="object-cover rounded-xl h-[600px] max-md:h-[350px] w-full  brightness-75  hover:brightness-100 transition duration-500 ease-in-out cursor-pointer"
                />
              </Link>
              <div className="absolute bottom-5 left-3  text-white font-bold text-4xl ">
                Skin Care
              </div>
            </div>
          </section>
          <div className="grid grid-row-2 gap-3 lg:grid-cols-1  md:grid-cols-2  lg:w-[500px] lg:h-[600px] md:h-[450px]  max-md:w-full  max-md:h-[700px] ">
            <div className="relative">
              <Link to="/categories">
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src="https://minimalist-e-commerce.vercel.app/static/media/home-img-3.60734311499ba1dbbc41.jpg"
                  alt="Two each of gray, white, and black shirts laying flat"
                  loading="lazy"
                  className="object-cover rounded-xl h-full w-full max-lg:w-full max-md:h-[350px] brightness-75 hover:brightness-100 transition duration-500 ease-in-out cursor-pointer"
                />
                <div className="absolute bottom-5 left-3  text-white font-bold text-4xl ">
                  Kitchen
                </div>
              </Link>
            </div>
            <div className="relative">
              <Link to="/categories">
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src="https://minimalist-e-commerce.vercel.app/static/media/home-img-4.672d1d0d7656e2a778f6.jpg"
                  alt="Two each of gray, white, and black shirts laying flat"
                  className="object-cover rounded-xl h-full   brightness-75 w-full max-md:h-[350px]  hover:brightness-100 transition duration-500 ease-in-out cursor-pointer"
                />
              </Link>
              <div className="absolute bottom-5 left-3  text-white font-bold text-4xl ">
                Electronics
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
