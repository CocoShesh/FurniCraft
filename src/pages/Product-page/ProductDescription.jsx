import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import data from "../../components/Product/data";
import Products from "../../components/Product/Products";
function ProductDescription() {
  const { productName } = useParams();
  const product = useMemo(
    () => data.find(item => item.name === productName),
    [productName]
  );

  return (
    <div className=" flex items-center justify-center flex-col w-full h-full">
      <section className=" flex items-center justify-center w-full gap-5   2xl:w-[1500px] h-fit py-10 px-12  2xl:px-0 max-sm:flex-col max-sm:px-5">
        <section className="bg-[#b2b2b2] text-black brightness-90 p-5 w-full rounded-md">
          <h1 className="text-2xl font-bold  "> Texture:</h1>
          <p className=" text-lg"> {product.Texture}</p>
        </section>
        <section className="bg-[#b2b2b2] text-black brightness-90 p-5 w-full rounded-md">
          <h1 className="text-2xl font-bold ">Weight:</h1>
          <p className=" text-lg"> {product.Weight} </p>
        </section>
        <section className="bg-[#b2b2b2] text-black brightness-90 p-5 w-full rounded-md">
          <h1 className="text-2xl font-bold "> Size:</h1>
          <p className=" text-lg">{product.Size} </p>
        </section>
      </section>
      <Products />
    </div>
  );
}

export default ProductDescription;
