import { Settings } from "lucide-react";
import React from "react";

export const HeroAbout = () => {
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
              Who We Are
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-30 font-heading text-3xl max-sm:text-lg max-sm:mx-5 font-extrabold leading-tight text-black">
            360DMMC is a leading digital technology consulting agency that helps
            businesses thrive in the AI era. We combine innovative AI solutions
            with strategic expertise to deliver transformative results for small
            and medium-sized businesses.
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6 max-w-3xl text-xl sm:text-[18px] leading-relaxed text-black/70">
            Our goal is to simplify —not overwhelm you.
          </p>
        </div>
      </div>
    </>
  );
};
