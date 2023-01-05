import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../assests/banner/keystoke-image-3.jpg";

const SingleService = ({ service }) => {
  const { img, name, link } = service;
  return (
    <div className="">
      <div className="pb-2 pt-28">
        <div className="border-2 border-sky-900 mb-20 absolute  lg:w-[300px] lg:h-[400px] 2xl:w-[300px] 2xl:h-[390px] "></div>
        <div className="bg-white shadow-xl lg:w-[300px] lg:h-[420px] 2xl:w-[320px] 2xl:h-[400px] relative lg:top-[-50px] 2xl:top-[-30px] left-5 border">
          <div className="w-10/12 m-auto mt-16">
            <img className=" m-auto w-14 my-5" src={img} alt="" />
            <h3 className="my-4 text-2xl font-bold text-blue-900">{name}</h3>
            <p className="text-slate-500 mb-8">
              We design professional looking yet simple websites. Our designs
              are search engine and user friendly.
            </p>
            <button className="py-5">
              <a
                href="#_"
                className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-sky-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray group"
              >
                <span className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-150 ease-in-out bg-sky-800 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  <Link to={link}>View Projects</Link>
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
