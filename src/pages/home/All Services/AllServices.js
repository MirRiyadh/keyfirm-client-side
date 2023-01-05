import React from "react";
import SingleService from "./SingleService";
import icon1 from "../../../assests/icons/graphic-designer.png";
import icon2 from "../../../assests/icons/world-wide-web.png";
import icon3 from "../../../assests/icons/digital-campaign.png";
import icon4 from "../../../assests/icons/content-writing.png";
import icon5 from "../../../assests/icons/account.png";
import icon6 from "../../../assests/icons/bar-chart.png";

const AllServices = () => {
  const services = [
    {
      id: 1,
      img: icon1,
      name: "Graphics Desing",
      description: "ok",
      link: "services/Graphics",
    },
    {
      id: 2,
      img: icon2,
      name: "Web Development",
      description: "ok",
      link: "services/Web",
    },
    {
      id: 3,
      img: icon3,
      name: "Online Marketing",
      description: "ok",
      link: "services/Marketing",
    },
    {
      id: 4,
      img: icon4,
      name: "Content Writing",
      description: "ok",
      link: "services/Contents",
    },
    {
      id: 5,
      img: icon5,
      name: "UX/UI",
      description: "ok",
      link: "/services",
    },
    {
      id: 6,
      img: icon6,
      name: "Chart Desing",
      description: "ok",
      link: "services/Charts",
    },
  ];
  return (
    <div className="my-16">
      <div>
        <span className="px-3 py-2 bg-emerald-50 text-[#03d4a0] ">
          what we can do for you
        </span>
        <h1 className="text-blue-900 mt-4 text-5xl font-semibold">
          Services we can help you with
        </h1>
        <p className="w-4/12 m-auto mt-4 text-slate-500">
          Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate
          augue sed eu leo eget risus imperdiet.
        </p>
      </div>

      <div className="grid grid-cols-3 lg:w-10/12 2xl:w-8/12 m-auto">
        {services.map((service) => (
          <SingleService service={service} key={service.id}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
