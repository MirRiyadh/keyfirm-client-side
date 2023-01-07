import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M5ucUAdED2dE9uUnjGFgHgk0L6Ff8dmrIlfmxoeUyDxrdzXIVuDCaXvvTcaAUHTKNRfEpJPnM7PbRag87XPdpvJ00jwePua73"
);

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
