import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ProductImage1 } from "./ProductImage.js";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function App() {
  const swiperRef = useRef(null);

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <section className="flex justify-center items-center   pt-14 mx-12 mb-5 max-sm:mx-auto max-sm:px-5 text-white ">
        <section className=" flex justify-between items-center w-full 2xl:w-[1500px]">
          <div>
            <h1 className="text-2xl max-sm:text-xl  ">
              {" "}
              Products we are proud of
            </h1>
          </div>
          <div className="flex   py-2 gap-2 max-sm:w-auto">
            <button
              onClick={prevSlide}
              className=" btn-md bg-[#628093] text-white text-2xl font-extrabold  rounded-sm"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className=" btn-md bg-[#628093] text-white text-xl  rounded-sm"
            >
              &#8594;
            </button>
          </div>
        </section>
      </section>
      <section className="2xl:flex 2xl:justify-center 2xl:items-center  ">
        <div className="carousel-container  2xl:w-[1500px]  rounded-box mx-12 max-sm:w-auto max-sm:mx-auto max-sm:px-5 text-white  ">
          <Swiper
            ref={swiperRef}
            effect={"slide"}
            speed={800}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={4} // Number of slides to show at a time
            spaceBetween={10} // Space between slides
          >
            {ProductImage1.map(img1 => (
              <SwiperSlide
                key={img1.id}
                className="carousel-item max-lg:h-auto max-w-auto max-md:h-auto  brightness-75  hover:brightness-100 transition duration-500 ease-in-out"
              >
                <Link to={`/product-page/${img1.name}`}>
                  <LazyLoadImage
                    src={img1.src}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    className="object-contain  h-auto   bg-white rounded-lg"
                    alt=""
                  />
                  <p className="ml-2 text-xl mt-2 max-sm:overflow-hidden max-md:text-xs">
                    {img1.name}
                  </p>
                  <p className=" ml-2 mb-1 text-lg font-bold max-md:text-xs text-[#f7cd7c]">
                    {img1.price}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
