import { Settings } from "lucide-react";
import React from "react";
import FramerArrow from "./FramerArrow";

export const HeroService = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        delay="50000"
        className="w-full bg-white px-4 pt-16 pb-20"
      >
        <div className="mx-auto max-w-6xl text-center">
          {/* Top pill */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
              <span className="flex h-6 w-6 items-center justify-center  p-1">
                <Settings className="text-black" size={20} />
              </span>
              <p className="font-sans text-[16px]">Our Services</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-auto font-heading font-extrabold text-[64px] max-sm:text-4xl max-sm:mx-5 leading-tight text-black">
            Comprehensive Business Solutions
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6 max-w-3xl text-xl sm:text-[18px] leading-relaxed text-black/70">
            End-to-end services designed to transform, grow, and future-proof
            your business across AI, marketing, operations, and technology.
          </p>
        </div>

        {/* Stats */}
        <div className="py-6 flex flex-wrap justify-center items-center gap-20 px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-heading font-bold text-4xl text-center mb-3 ">
              50+
            </h1>
            <p className="text-base sm:text-lg font-sans font-semibold text-center">
              Years of <br /> Experience
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-heading font-bold text-4xl  text-center mb-3 ">
              200+
            </h1>
            <p className="text-base sm:text-lg font-sans font-semibold text-center">
              Projects <br /> Delivered
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-heading font-bold text-4xl  text-center mb-3 ">
              15+
            </h1>
            <p className="text-base sm:text-lg font-sans font-semibold text-center">
              Industry <br /> Experts
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-heading font-bold text-4xl  text-center mb-3 ">
              98%
            </h1>
            <p className="text-base sm:text-lg font-sans font-semibold text-center">
              Client <br /> Satisfaction
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
