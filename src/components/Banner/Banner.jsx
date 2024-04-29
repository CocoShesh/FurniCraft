import React from "react";
import banner from "../../assets/banner.jpg";

function Banner() {
  return (
    <div className="flex max-sm:px-5 px-12 pt-10 pb-10  h-[500px] max-md:h-fit   max-sm:w-full max-sm:flex-col-reverse items-center justify-center ">
      <section className=" 2xl:w-[1500px]  w-full h-full flex  max-md:flex-col-reverse items-center justify-center ">
        <section className="  bg-[#e9e9e9] cursor-pointer  brightness-90 hover:brightness-100 h-full flex flex-col items-center justify-center w-full  max-md:items-start  md:rounded-l-lg  max-md:rounded-b-lg  max-md:py-10 max-lg:px-5">
          <h1 className=" font-semibold text-3xl mb-5 text-gray-800">
            Creative harmonious living
          </h1>
          <p className="lg:w-[385px] max-sm:max-w-xs mb-5 text-[18px]  text-gray-500">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <a href="/product-page">
            <button className="w-full px-10  h-14 rounded-lg  bg-black text-white font-[600] text-[18px]">
              Shop Now
            </button>
          </a>
        </section>
        <section className="w-full h-full ">
          <img
            src={banner}
            alt={banner}
            className="  2xl:h-[420px] max-md:h-[300px]  brightness-90 hover:brightness-100  cursor-pointer h-full w-full object-cover  max-md:rounded-t-lg  md:rounded-r-lg   "
          />
        </section>
      </section>
    </div>
  );
}

export default Banner;
