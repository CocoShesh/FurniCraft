import React from "react";
import data from "./data";
import { Link } from "react-router-dom";
function Products() {
  const limitedData = data.slice(0, 8);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex items-center justify-center  ">
      <div className="mx-5  px-4  sm:px-6 py-10  xs:px-0  lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Products we are proud of
        </h2>

        <div className="mt-6 grid 2xl:w-[1500px] lg:grid-cols-4  gap-x-6 gap-y-10  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-4   xl:gap-x-8">
          {limitedData.map(product => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border-2 lg:aspect-none group-hover:brightness-100  brightness-75  lg:h-80 2xl:h-auto">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" object-cover object-center bg-white lg:h-full lg:w-auto 2xl:w-full 2xl:h-fit "
                />
              </div>
              <div className="mt-4 flex justify-between max-sm:flex-col">
                <div>
                  <h3 className=" text-white  w-[150px] text-[18px] font-semibold">
                    <Link
                      to={`/product-page/${product.name}`}
                      onClick={scrollToTop}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-xl font-bold  mr-1 text-[#f7cd7c]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
