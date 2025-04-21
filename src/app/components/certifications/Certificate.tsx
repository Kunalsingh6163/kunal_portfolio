import React from "react";
import { CERTIFICATIONS } from "../contants/Texts";
import Link from "next/link";

function Certificate() {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Certifications</h1>
      <div>
        {CERTIFICATIONS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <Link
                href={project.link}
                className="border-s-orange-300 h-15 w-20 rounded-2xl text-xl text-white font-normal bg-blue-800"
              >
                Watch Certificate
              </Link>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.title}{" "}
                <span className=" mb-2 font-semibold text-purple-300">
                  From {project.provider}
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

export default Certificate;
