/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 w-auto">
      <div className="flex flex-shrink-0 items-center">
        <img
          src="/portfolioLogo.svg"
          alt="logo"
          height="85px"
          width="150px"
          className=" mx-2 w-15"
        />
        <p className="text-2xl">
          Kunal&apos;S <br></br>Portfolio
        </p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link href="https://drive.google.com/file/d/1Gu1RkifuRexqMjo1W5aT54vW9HJrZGO5/view?usp=sharing">
          <button
            type="button"
            className="rounded bg-blue-800 text-xl h-12 w-30 text-white"
          >
            Resume
          </button>
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link href="https://www.linkedin.com/in/kunalsingh2021/">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/kunalsingh2021">
          <FaGithub />
        </Link>
        <Link href="https://www.instagram.com/singhkunal97/">
          <FaInstagram />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
