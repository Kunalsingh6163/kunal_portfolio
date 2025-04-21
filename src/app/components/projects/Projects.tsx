/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PROJECTS } from "../contants/Texts";

function Projects() {
  return (
    <div
      className=" border-b border-neutral-900 pb-4"
      style={{ marginRight: "85px" }}
    >
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-neutral-900 mr-2 gap-0.5 rounded px-2 py-1 text-sm font-medium text-purple-400" style={{marginRight:'-5px'}}
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

export default Projects;
