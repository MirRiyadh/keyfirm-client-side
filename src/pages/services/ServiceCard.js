import React from "react";

const ServiceCard = ({ item }) => {
  const { name } = item;
  return (
    <div className="border-2 hover:border-sky-300 hover:border-2 border-sky-700 p-3 rounded-xl ">
      <div className="card card-compact w-[350px] bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
