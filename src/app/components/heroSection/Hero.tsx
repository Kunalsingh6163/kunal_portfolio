/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HERO_CONTENT } from "../contants/Texts";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl lg:ml-8">
              Kunal Singh
            </h1>
            <span className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent lg:ml-8">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-2xl py-6 font-thin font-mono tracking-tight lg:ml-8">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src="/KunalPic.png" alt="Profile Pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
