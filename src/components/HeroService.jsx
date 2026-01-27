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
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 rounded-full border border-[#222222]/25 px-4 py-1 text-[12px] font-semibold tracking-wide"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#23378C] p-1">
                <Settings className="text-white" />
              </span>
              Our Services
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-auto font-heading font-bold leading-tight text-black text-3xl sm:text-[56px] md:text-[64px]">
            Comprehensive Business Solutions
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6 max-w-3xl text-[16px] sm:text-[18px] leading-relaxed text-black/70">
            End-to-end services designed to transform, grow, and future-proof
            your business across AI, marketing, operations, and technology.
          </p>
        </div>

        {/* Stats */}
        <div className="py-6 flex flex-wrap justify-center items-center gap-10 sm:gap-20 px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-heading text-4xl sm:text-6xl text-center mb-3 sm:mb-5">
              50+
            </h1>
            <p className="text-base sm:text-xl font-sans font-semibold text-center">
              Years of Combined <br /> Experience
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-heading text-4xl sm:text-6xl text-center mb-3 sm:mb-5">
              200+
            </h1>
            <p className="text-base sm:text-xl font-sans font-semibold text-center">
              Projects <br /> Delivered
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-heading text-4xl sm:text-6xl text-center mb-3 sm:mb-5">
              15+
            </h1>
            <p className="text-base sm:text-xl font-sans font-semibold text-center">
              Industry <br /> Experts
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-heading text-4xl sm:text-6xl text-center mb-3 sm:mb-5">
              98%
            </h1>
            <p className="text-base sm:text-xl font-sans font-semibold text-center">
              Client <br /> Satisfaction
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
