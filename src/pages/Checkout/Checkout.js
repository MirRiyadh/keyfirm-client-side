import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const payment = useLoaderData();
  console.log(payment.name);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold">Payment for {payment.name}</h1>
        <p className="font-semibold">You need to pay ${payment.price}</p>
      </div>
    </div>
  );
};

export default Checkout;
