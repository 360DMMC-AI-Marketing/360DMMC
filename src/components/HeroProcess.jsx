import { Workflow } from "lucide-react";
import React from "react";

export const HeroProcess = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        delay="50000"
        className="w-full bg-white px-4 pt-16 pb-10"
      >
        <div className="mx-auto max-w-6xl text-center">
          {/* Top pill */}
          <div className="mb-8 flex justify-center">
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 rounded-full border border-[#222222]/25 px-4 py-1 text-[12px] font-semibold tracking-wide"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#23378C] p-1">
                <Workflow className="text-white" />
              </span>
              Our Process
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-30 font-heading font-extrabold text-4xl max-sm:text-lg max-sm:mx-5 leading-tight text-black">
            From Strategy to Implementation
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6 max-w-3xl text-xl sm:text-[18px] leading-relaxed text-black/70">
            A collaborative, transparent approach to AI integration <br /> that
            ensures success every step of the way.
          </p>
        </div>
      </div>
    </>
  );
};
