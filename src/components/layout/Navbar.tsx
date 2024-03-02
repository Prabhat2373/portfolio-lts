import Link from "next/link";
import React from "react";

// import { Link } from "next";
const Navbar = () => {
  return (
    <div
      className="flex justify-between backdrop:blur-xl  px-5 py-4 border-b absolute w-full  text-white top-0  left-0"
      style={{ zIndex: 99999999 }}
    >
      <div>
        <Link href={"/"}>
          <div className="flex gap-1 items-end">
            <div className="rounded-full bg-orange-400 w-[25px] h-[25px]"></div>
            <h1>
              ASHISH TAMBE <span className="text-sm ml-1">Editor</span>
            </h1>
          </div>
        </Link>
      </div>
      <div>
        <ul>
          <li className="flex">
            <Link
              href={"/resume"}
              className="border-r pr-4 hover:text-orange-400 transition-colors duration-200 ease-in "
            >
              Resume
            </Link>
            <Link
              href={"/projects"}
              className="border-r pr-4 pl-4 hover:text-orange-400 transition-colors duration-200 ease-in"
            >
              Projects
            </Link>
            <Link
              href={"/contact"}
              className="pl-4 hover:text-orange-400 transition-colors duration-200 ease-in"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
