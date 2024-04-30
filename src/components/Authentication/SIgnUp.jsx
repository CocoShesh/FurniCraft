import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import ImageCarousel from "./ImageCarousel";
function SignUp() {
  return (
    <ImageCarousel>
      <div className="flex flex-col justify-center   px-6 py-8 lg:px-8 max-sm:w-auto max-sm:px-5 ">
        <Tooltip title="Close">
          <Link to="/" className="self-end">
            <span> &#10060;</span>
          </Link>
        </Tooltip>
        <div className=" sm:w-full sm:max-w-sm">
          <h2 className=" text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
          <p>Please Fill up the information below</p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-none">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-3 bg-[#e9e9e9] px-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>

              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-3 bg-[#e9e9e9] px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-3 bg-[#e9e9e9] px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full h-[50px] justify-center rounded-md bg-indigo-600 px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className=" text-center mt-10 text-lg text-slate-400 ">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 pl-1 text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>{" "}
    </ImageCarousel>
  );
}

export default SignUp;
