import React, { useState, useMemo, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../../components/Product/data.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "../../components/Header/Header";
import Products from "../../components/Product/Products";
import CartContext from "../../context/CartContext";
import ProductDescription from "./ProductDescription";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product_Page() {
  const { addToCart } = useContext(CartContext);
  const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  const product = useMemo(
    () => data.find(item => item.name === productName),
    [productName]
  );

  useEffect(() => {
    setSelectedImage(product?.imageSrc);
  }, [productName]);

  useEffect(() => {
    if (product) {
      const price = parseFloat(product.price.replace("$", ""));
      setTotalAmount(quantity * price);
    }
  }, [quantity, product]);

  const [totalAmount, setTotalAmount] = useState(0);

  if (!product) {
    return (
      <>
        <Header />
        <Products />
        <Banner />
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const price = parseFloat(product.price.replace("$", ""));
    const itemTotal = quantity * price;
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: itemTotal,
      quantity: quantity,
      src: product.imageSrc,
      alt: product.imageAlt,
    };

    const currentCartItems =
      JSON.parse(window.localStorage.getItem("cart")) || [];

    const updatedCartItems = [...currentCartItems, itemToAdd];

    window.localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    addToCart(itemToAdd);
    toast("🎉 Product successfully added to your cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "black-background",
    });
  };

  return (
    <>
      <Header />
      <section className=" pt-14 flex flex-col items-center justify-center w-full">
        <h2 className="text-center text-5xl mb-10 max-sm:text-4xl font-bold text-[#b9b8b8]">
          {product.name}
        </h2>
        <section className="flex items-center justify-center h-fit w-full   py-10  2xl:w-[1500px] max-lg:px-5 lg:px-16 max-lg:flex-col gap-20 2xl:px-0">
          <section className="flex flex-col items-center max-lg:w-fit">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
              src={selectedImage ? selectedImage : product.imageSrc}
              alt={product.imageAlt}
              height={300}
              width={300}
              className="w-[450px] max-lg:w-full h-[350px] rounded-lg brightness-90 hover:brightness-100 mb-5 bg-white "
            />
            <section className="flex gap-3  max-lg:w-fit max-lg:mt-5">
              {product?.otherImgs.map((img, index) => {
                return (
                  <LazyLoadImage
                    key={index}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={img}
                    alt={product.imageAlt}
                    height={300}
                    width={300}
                    onClick={() => setSelectedImage(img)}
                    className="w-[200px]   max-lg:w-[150px] h-[100px] cursor-pointer  rounded-lg brightness-90 hover:brightness-100 max-lg:mb-0 lg:mb-20 bg-white "
                  />
                );
              })}
            </section>
          </section>

          <section className="w-full flex flex-col justify-between lg:min-h-[550px] max-lg-full">
            <section className="flex flex-col justify-between h-[350px] max-lg:h-full ">
              <section>
                <h1 className="text-4xl font-bold ">Description</h1>
                <p className="py-2 text-justify mt-3 text-[#b9b8b893] lg:text-xl">
                  {product.Description}
                </p>
              </section>
              <section className="flex  max-sm:flex-wrap items-center gap-10 mt-10">
                <p className="font-bold text-2xl"> Quantity</p>
                <section className="flex text-black">
                  <div
                    className="w-[50px] h-[50px] border-[1px] text-4xl text-center cursor-pointer bg-[#cfcdcd]  border-black "
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    &#43;
                  </div>
                  <input
                    type="text"
                    readOnly
                    value={quantity}
                    className="w-[50px] h-[50px] border-[1px] text-3xl text-center bg-[#cfcdcd]  outline-none  border-black"
                  />
                  <div
                    className="w-[50px] h-[50px] border-[1px] text-4xl text-center cursor-pointer bg-[#cfcdcd]  border-black"
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    &#8722;
                  </div>
                </section>
                <p className="font-bold text-2xl">${totalAmount}</p>
              </section>
            </section>
            <section className="flex  max-sm:flex-col mt-10 justify-end gap-5">
              <button
                className="w-[200px]  max-sm:w-full h-[50px] border-[1px] border-black font-bold text-2xl hover:bg-[#cfcdcd] hover:text-black transform hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <button className="w-[200px] max-sm:w-full   h-[50px] border-[1px] border-black font-bold text-2xl text-black bg-[#f7cd7c] hover:bg-transparent  hover:text-[#f7cd7c] transform hover:scale-105 transition-all duration-300 ease-in-out">
                Buy Now
              </button>
            </section>
          </section>
        </section>
        <ProductDescription />
      </section>
      <ToastContainer
        position="top-center"
        closeOnClick
        hideProgressBar={false}
        autoClose={5000}
        draggable
        pauseOnHover
        theme="#e9e9e9"
      />
    </>
  );
}

export default Product_Page;
