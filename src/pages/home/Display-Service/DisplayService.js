import { useQuery } from "@tanstack/react-query";
import React from "react";

const DisplayService = () => {
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
  console.log(servicesName);
  return <div></div>;
};

export default DisplayService;
