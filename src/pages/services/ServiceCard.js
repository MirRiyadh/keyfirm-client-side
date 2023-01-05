import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { _id, name, title, feature_img, price, ratings, short_Descrip } = item;

  return (
    <div className=" border-2 hover:border-violet-500 hover:border-2 border-gray-200 p-3 rounded-xl ">
      <div className="card card-compact w-[350px] bg-base-100 shadow-xl text-left">
        <figure>
          <img src={feature_img} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-between items-center">
            {" "}
            <h2 className="card-title">{title}</h2>
            <div className="bg-sky-300 px-3 py-1 font-semibold text-white rounded-md">
              {name}
            </div>
          </div>

          <p className="text-gray-400">{short_Descrip.slice(0, 100)}...</p>
          <div className="card-actions justify-between items-center">
            <div className="bg-gradient-to-r from-fuchsia-500 via-fuchsia-500 to-fuchsia-500 text-2xl font-bold text-transparent bg-clip-text">
              ${price}
            </div>
            <Link to={`/details/${_id}`}>
              <button className="bg-violet-500 hover:bg-violet-700 px-3 py-2 text-white font-semibold rounded-lg">
                {" "}
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
