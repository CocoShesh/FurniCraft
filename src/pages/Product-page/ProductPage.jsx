import React, { useState, useMemo, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../../components/Product/data";
import Header from "../../components/Header/Header";
// import Rating from "../../Ratings/Rating";
import Products from "../../components/Product/Products";
import CartContext from "../../context/CartContext";
import { Button, message } from "antd";
import ProductDescription from "./ProductDescription";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
function Product_Page() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Item successfully added to your shopping cart.",
      className: "custom-class",
      style: {
        fontSize: "15px",
        fontFamily: "monospace",
        fontWeight: "bold",
      },
    });
  };
  const { addToCart } = useContext(CartContext);
  const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(
    () => data.find(item => item.name === productName),
    [productName]
  );

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
      src: product.imageSrc,
      alt: product.imageAlt,
    };

    const currentCartItems =
      JSON.parse(window.localStorage.getItem("cart")) || [];

    const updatedCartItems = [...currentCartItems, itemToAdd];

    window.localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    addToCart(itemToAdd);
  };

  return (
    <>
      <Header />
      <section className=" pt-14 flex flex-col items-center justify-center">
        {contextHolder}
        <h2 className="text-center text-5xl mb-10 max-sm:text-4xl font-bold text-[#b9b8b8]">
          {product.name}
        </h2>
        <section className="flex items-center justify-center h-fit w-full  py-10  2xl:w-[1500px] px-12 max-md:flex-col gap-20 2xl:px-0">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="max-w-xs rounded-lg brightness-90 hover:brightness-100 bg-white "
          />
          <section>
            <h1 className="text-2xl font-bold">Description</h1>
            <p className="py-2 text-justify">{product.Description}</p>
            <section className="flex items-center gap-10 mt-10">
              <p className="font-bold text-2xl"> Quantity</p>
              <section className="flex text-black">
                <div
                  className="w-[50px] h-[50px] border-[1px] text-4xl text-center cursor-pointer bg-white border-black "
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  &#8722;
                </div>
                <input
                  type="text"
                  readOnly
                  value={quantity}
                  className="w-[50px] h-[50px] border-[1px] text-3xl text-center bg-white outline-none  border-black"
                />
                <div
                  className="w-[50px] h-[50px] border-[1px] text-4xl text-center cursor-pointer bg-white border-black"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  &#43;
                </div>
              </section>
              <p className="font-bold text-2xl">${totalAmount}</p>
            </section>
            <section className="flex mt-10 justify-end gap-5" onClick={success}>
              <button
                className="w-[200px] h-[50px] border-[1px] border-black font-bold text-2xl hover:bg-black hover:text-white hover:scale-110"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <button className="w-[200px] h-[50px] border-[1px] border-black font-bold text-2xl text-black bg-[#f7cd7c] hover:bg-transparent hover:scale-110 hover:text-red-700">
                Buy Now
              </button>
            </section>
          </section>
        </section>
        <ProductDescription />
      </section>
    </>
  );
}

export default Product_Page;
