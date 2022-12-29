import React from "react";
import banner1 from "../../../assests/banner/keystoke-image-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-2  bg-gradient-to-b from-[#EEEEFD] via-[#FEF7E2] to-sky-200 shadow-md h-[600px] ">
        <div className="my-10 w-8/12 m-auto text-left  pt-28">
          <h1 className="text-7xl font-bold text-[#000248]">
            Build stunning websites & apps
          </h1>
          <p className="py-5 text-[#747474] ">
            Create live segments and target the right people for messages based
            on their behaviors.
          </p>
          <button className="custom-btn btn-14 text-black">Show Project</button>
        </div>
        <div className="py-20">
          <div className="border-4 border-sky-700 mb-20 absolute w-[400px] h-[470px] "></div>
          <img className=" relative top-[-50px] left-5" src={banner1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
