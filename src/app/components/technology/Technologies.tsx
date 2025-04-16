import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa6";
import { CgTwilio } from "react-icons/cg";
import { FaFigma } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJsSquare className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoTypescript className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNode className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMui className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <CgTwilio className="text-7xl text-red-600 bg-white rounded-b-full rounded-t-full" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-cyan-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBitbucket className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaFigma className="text-7xl text-red-500" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
