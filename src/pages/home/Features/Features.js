import React from "react";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaAngellist, FaRegSmileBeam } from "react-icons/fa";
import photo1 from "../../../assests/photos/featured-image-01.jpg";

const Features = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="w-11/12  lg:w-8/12 2xl:w-8/12 m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={photo1} alt="photo one" />
          </div>

          <div className="text-center md:text-left mb-4 lg:pt-16">
            <span className="text-base text-amber-500 font-semibold py-1 px-3 bg-sky-50 text-[#23D5FE]">
              Our Feature Projects{" "}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-blue-900 mt-3">
              Our Application Development for Andriod & IOS
            </h2>
            <p className="text-slate-400 mb-4">
              — Keyfirm is a leading company for digital services. By
              professionally manage all digital services in our website and
              selling them directly, We’re able to offer digital services that
              work like new at a much lower price. On top of that, choosing
              digital services is good for the recycle. Why wait? Buy smart. Not
              new.
            </p>
            <button>
              <Link
                href="#_"
                className="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-sky-500 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-300 ease-in-out bg-sky-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-200 ease-in-out delay-200 -translate-x-full translate-y-full bg-sky-700 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Watch Demos
                </span>
              </Link>
            </button>

            <div className="flex items-center text-left font-semibold justify-center md:justify-start pt-16">
              <div className="flex flex-col w-7/12 lg:flex-row ">
                <div className="grid flex-grow rounded-box">
                  <h2 className="text-4xl font-bold text-violet-600">100%</h2>
                  <p>Unqiue Kits</p>
                </div>
                <div className="border-[1px]"></div>
                <div className="grid flex-grow rounded-box ml-3">
                  <h2 className="text-4xl font-bold text-violet-600">30K</h2>
                  <p>Designs Downloaded</p>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-8  font-semibold justify-center md:justify-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
