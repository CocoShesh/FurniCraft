import React, { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Tooltip } from "antd";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import CartContext from "../../../context/CartContext";
import useAOS from "../../../hooks/UseAnimations";
const AddToCartDrawer = ({ handleOpen }) => {
  const { cartItems, deleteItem } = useContext(CartContext);

  const Total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleDeleteItem = id => {
    deleteItem(id);
  };

  useAOS();
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-end items-end bg-[#0505054d] z-10 ">
        <section
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="w-[40rem] h-full flex-end overflow-scroll text-white select-none bg-[#111827]"
        >
          <section className="flex flex-col justify-between h-full pb-5 ">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full  w-full  px-5  text-center relative select-none gap-y-5">
                <IoIosClose
                  className="cursor-pointer absolute  top-5 hover:text-[#fde047] right-5 text-4xl"
                  onClick={handleOpen}
                />
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src="https://minimalist-e-commerce.vercel.app/static/media/empty-cart.17f48bd13327a233e04a.png"
                  className="h-[150px]"
                  alt=""
                />
                <h1 className="font-bold  text-xl">
                  Explore our products and add to your cart!
                </h1>
                <a href="/product-page">
                  <button className="w-full max-w-xs max-sm:max-w-full h-14 px-8 border border-black font-bold text-xl bg-white text-black hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out">
                    Shop Now
                  </button>
                </a>
              </div>
            ) : (
              <>
                <section className="px-10 max-sm:px-5 ">
                  <section className=" pt-5  font-bold  items-center  flex w-full justify-between">
                    <h1 className="text-2xl text-[#dbd1d1]">
                      Your Shopping Cart ({cartItems?.length})
                    </h1>

                    <IoIosClose
                      className="cursor-pointer  text-4xl"
                      onClick={handleOpen}
                    />
                  </section>

                  <section className=" flex flex-col justify-between mt-5">
                    {cartItems.map(item => {
                      return (
                        <div
                          key={item.id}
                          className="flex w-full items-center border border-gray-200 rounded-lg mt-5 overflow-hidden"
                        >
                          <img
                            src={item.src}
                            alt={item.name}
                            className="h-24 w-24 object-cover bg-white"
                          />
                          <div className="flex flex-col flex-1 p-4">
                            <div className="flex items-center justify-between gap-3">
                              <h2 className="font-semibold text-lg   max-sm:line-clamp-1">
                                {item.name}
                              </h2>
                              <span className="text-[#f7cd7c] font-bold text-lg">
                                ${item.price}
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-sm ">
                                Quantity: {item.quantity}
                              </span>
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="text-red-500 focus:outline-none"
                              >
                                <RiDeleteBin2Fill />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </section>
                </section>
                <div className="flex max-sm:flex-col gap-5 items-center  border-t  border-dashed  max-sm:items-start justify-between px-8 mt-5 py-2 w-full">
                  <div className="text-left">
                    <h1 className="text-3xl font-bold mt-2">Subtotal</h1>
                    <p className="text-3xl text-[#f7cd7c] font-bold">
                      ${Total}
                    </p>
                  </div>
                  <button className="w-full max-w-xs max-sm:max-w-full h-14 border border-black font-bold text-xl bg-white text-black hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out">
                    Go to Checkout
                  </button>
                </div>
              </>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default AddToCartDrawer;
