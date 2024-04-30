import React, { useState } from "react";
import { Carousel } from "antd";
import useAOS from "../../hooks/UseAnimations";

export default function ImageCarousel({ children }) {
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  useAOS();

  return (
    <>
      <section
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
        className="flex min-h-screen w-full items-center justify-center max-lg:px-20 max-sm:px-3 px-20   "
      >
        <section className="flex items-center justify-center my-2  2xl:w-[1300px] rounded-lg  bg-[#e9e9e9] w-full max-xl:w-[500px]  max-sm:w-full max-sm:flex-col ">
          <section className="max-xl:hidden">
            <Carousel autoplay className="w-[700px]   " effect="fade">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-rush-running-delivering-package-customer-isolated-grey-studio-background-copy-space_1258-1211.jpg?w=2000"
                  alt=""
                  className="h-[620px]   rounded-l-lg "
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space_1258-1216.jpg?w=2000"
                  alt=""
                  className="h-[620px]   rounded-l-lg"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/delivery-concept-portrait-happy-african-american-delivery-man-pointing-hand-present-box-package-isolated-grey-studio-background-copy-space_1258-1263.jpg"
                  alt=""
                  className="h-[620px]  rounded-l-lg "
                />
              </div>
            </Carousel>
          </section>
          <section className="w-full">{children}</section>
        </section>
      </section>
    </>
  );
}
