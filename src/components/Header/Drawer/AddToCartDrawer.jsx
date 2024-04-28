import React, { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { Tooltip } from "antd";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import CartContext from "../../../context/CartContext";
const AddToCartDrawer = ({ handleOpen }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-end items-end bg-[#0505054d] z-10 ">
        <section className="w-[40rem] h-full flex-end  text-white select-none bg-[#111827]">
          <section className="flex flex-col justify-between h-full pb-5 ">
            <section className="px-10 ">
              <section className=" pt-5  font-bold  items-center  flex w-full justify-between">
                <h1 className="text-2xl text-[#dbd1d1]">
                  Your Shopping Cart ({cartItems?.length})
                </h1>

                <IoIosClose
                  className="cursor-pointer  text-4xl"
                  onClick={handleOpen}
                />
              </section>

              {cartItems.length > 0 ? (
                <section className="grid grid-cols-5 gap-5 mb-10 mt-10  font-bold  select-none text-white text-xl text-center">
                  <div className="">Product</div>
                  <div className="">Name</div>
                  <div className="">Price</div>
                  <div className="">Quantity</div>
                  <div className="">Action</div>
                </section>
              ) : (
                <div className="flex flex-col items-center justify-center h-full  select-none gap-y-5">
                  <img
                    src="https://minimalist-e-commerce.vercel.app/static/media/empty-cart.17f48bd13327a233e04a.png"
                    className="h-[150px]"
                    alt=""
                  />
                  <h1 className="font-bold  text-xl">
                    Explore our products and add to your cart!
                  </h1>
                  <a href="/product-page">
                    <button className="w-[150px] h-[50px] bg-base-200  rounded-sm uppercase tracking-wider font-bold  text-lg hover:bg-blue-500 hover:text-white">
                      Shop Now
                    </button>
                  </a>
                </div>
              )}

              <section className=" flex flex-col justify-between">
                {cartItems.map(item => (
                  <section className=" flex flex-col justify-between">
                    <div
                      key={item.id}
                      className="grid grid-cols-5 text-center gap-5 items-center select-none  mb-10"
                    >
                      <div>
                        <img
                          src={item.src}
                          alt=""
                          className="object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-lg  font-bold">{item.name}</p>
                      </div>
                      <div>
                        <p className="font-[900] text-xl  text-red-500">
                          ${item.price}
                        </p>
                      </div>
                      <div>
                        <p className="font-[900] text-xl  text-red-500">
                          {item.quantity}
                        </p>
                      </div>

                      <div className="text-3xl flex flex-col justify-center gap-5 items-center">
                        <Tooltip title="Edit">
                          <MdEditSquare />
                        </Tooltip>
                        <Tooltip title="Delete">
                          <RiDeleteBin2Fill
                            onClick={() => handleDeleteItem(item.id)}
                            className="cursor-pointer"
                          />
                        </Tooltip>
                      </div>
                    </div>
                  </section>
                ))}
              </section>
            </section>
            <div className=" flex px-8  mt-5 items-center justify-between w-full">
              <div className="text-left ">
                <h1 className="text-4xl font-bold  mt-2"> Subtotal</h1>
                {/* <p className="text-3xl text-red-500 font-bold ">${item?.price}</p> */}
              </div>
              <div>
                <button className=" w-[200px] h-[50px] border-[1px] border-black font-bold  text-xl hover:bg-red-500 cursor-pointer hover:text-white hover:scale-y-110">
                  Go to Checkout
                </button>
              </div>
            </div>
          </section>
        </section>
      </section>{" "}
    </>
  );
};

export default AddToCartDrawer;
