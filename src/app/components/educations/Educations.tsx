/* eslint-disable @next/next/no-img-element */
import React from "react";
import { EDUCATIONS } from "../contants/Texts";

function Educations() {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Educations</h1>
      <div>
        {EDUCATIONS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.degree}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.degree}{" "}
                <span className=" mb-2 font-semibold text-purple-300">
                  From {project.university}
                </span>
              </h6>
              <p className="text-white font-thin">{project.Session}</p>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-neutral-900 mr-2 rounded px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Educations;
