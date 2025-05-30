/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ABOUT_ME } from "../contants/Texts";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src="/aboutSticker.png"
              alt="about-sticker"
              height={350}
              width={400}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:mt-10">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-thin font-mono tracking-tight">{ABOUT_ME}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
