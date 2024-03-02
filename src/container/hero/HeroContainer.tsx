import React from "react";
import { BackgroundGradientAnimation } from "./GradientBg";
import Link from "next/link";
import LeftUpArrow from "@/components/icons/LeftUpArrow";
import { SVGMaskEffectDemo } from "./SvgMaskEffect";

const HeroContainer = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold   ">
        <div className="flex flex-col">
          <div className="text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              ASHISH X DESIGNER
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 my-5">
            <button className="border flex items-center gap-2 text-white border-white p-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors ease-in duration-200">
              <LeftUpArrow />
              <Link href={"/projects"}>PROJECTS</Link>
            </button>
            <button className="border flex items-center gap-2 text-white border-white p-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors ease-in duration-200">
              <LeftUpArrow />
              <Link href={"/resume"}>RESUME</Link>
            </button>
            <button className="border flex items-center gap-2 text-white border-white p-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors ease-in duration-200">
              <LeftUpArrow />
              <Link href={"/contact"}>CONTACT</Link>
            </button>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default HeroContainer;
