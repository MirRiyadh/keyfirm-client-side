import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const ServiceDetails = () => {
  const projectDetails = useLoaderData();
  console.log(projectDetails);

  return (
    <div className="w-8/12 m-auto my-12">
      {projectDetails.map((project) => (
        <div key={project._id}>
          <div className="grid grid-cols-3 ">
            <div className="col-span-2 mr-5">
              <img src={project.feature_img} />
            </div>
            <div className="text-left pt-5 ">
              <h1 className="text-3xl font-bold mb-3">{project.title}</h1>

              <p className="font-semibold text-sm mb-3">
                {project.short_Descrip}
              </p>
              <p className="text-4xl font-semibold mb-3">${project.price}</p>
              <div className="flex items-center">
                <BsStarFill className="text-amber-400"></BsStarFill>
                <span className="font-semibold ml-1">{project.ratings}</span>
              </div>

              <p className="mb-10 font-semibold">
                Date: {project.publish_date}
              </p>
              <div className="flex justify-between">
                <span className="bg-violet-400 px-3 py-2 font-semibold text-white shadow-md rounded-md">
                  Downlaoded {project.like}
                </span>
                <button className="bg-sky-500 hover:bg-sky-600 px-3 py-2 font-semibold text-white shadow-md rounded-md">
                  <a href={project.live_link} target="_blank">
                    View Project
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 my-10">
            <img
              className="shadow-lg"
              src={project?.project_img[0].img1}
              alt=""
            />
            <img
              className="shadow-lg"
              src={project?.project_img[0].img2}
              alt=""
            />
            <img
              className="shadow-lg"
              src={project?.project_img[0].img3}
              alt=""
            />
          </div>
          <div className="text-left">
            <h2 className="font-bold text-4xl">Project Details:</h2>
            <p className="mb-5 text-gray-500">{project.description}</p>
            <h3 className="font-bold">Technologies:</h3>
            <p className="mb-5 text-gray-500">{project.project_tech}</p>

            <p className="font-bold">Publish Date: {project.publish_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetails;
