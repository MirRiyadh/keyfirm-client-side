import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "../../layout/Loading/Loading";
import HomeCard from "../home/Display-Service/HomeCard";
import SingleCard from "../home/Display-Service/SingleCard";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const items = useLoaderData();

  const {
    data: servicesName,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["servicesName"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/names`);
      const data = await res.json();
      return data;
    },
  });

  const { data: homeServices, isLoadingTwo } = useQuery({
    queryKey: ["homeServices"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isLoadingTwo) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-20">
      <div className="w-8/12 m-auto">
        <div className="grid grid-cols-2">
          <div className="text-left">
            {/* <span className="py-1 px-2 bg-sky-50 text-sky-800">
              Our Projects
            </span> */}
            <h2 className="mt-4 text-5xl font-semibold text-blue-900">
              Our Projects.
            </h2>
          </div>
          <div className=" flex justify-center items-end ">
            {servicesName.map((service) => (
              <button
                className="ml-5 border shadow-sm border-purple-500 hover:bg-purple-500 px-2 py-2 rounded-md font-semibold hover:text-white"
                key={service._id}
              >
                <Link to={`/services/${service.name}`}>{service.name}</Link>
              </button>
            ))}
          </div>
        </div>
        {items ? (
          <>
            <div className=" grid grid-cols-3 gap-28 py-28">
              {items?.map((item) => (
                <ServiceCard item={item} key={item._id}></ServiceCard>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className=" grid grid-cols-3 gap-28 py-28">
              {homeServices?.map((homeService) => (
                <HomeCard
                  homeService={homeService}
                  key={homeService._id}
                ></HomeCard>
              ))}
            </div>
          </>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Services;
