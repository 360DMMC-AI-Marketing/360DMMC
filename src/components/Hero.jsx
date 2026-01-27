import React from "react";
import FramerArrow from "./FramerArrow";
import { Globe } from "lucide-react";

const HeroBanner = () => {
  return (
    <section
      data-aos="fade-up"
      delay="50000"
      className="w-full bg-white px-4 pt-16 pb-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        {/* Top pill */}
        <div className="mb-8 flex justify-center">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full border border-[#222222]/25 px-4 py-1 text-[12px] font-semibold tracking-wide "
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border bg-[#23378C] text-[5px] p-1 border-0 ">
              <Globe className="text-white" />
            </span>
            AI-POWERED BUSINESS TRANSFORMATION
          </div>
        </div>

        {/* Heading */}
        <h1 className="mx-auto text-3xl font-heading font-extrabold leading-tight text-black sm:text-[56px] md:text-[64px]">
          Unlock Your Business Potential
          <br />
          With AI Innovation
        </h1>

        {/* Description */}
        <p className="font-sans font-medium mx-auto max-w-3xl text-[16px] leading-relaxed text-black/70 sm:text-[18px]">
          Transform operations, amplify your marketing, and deliver exceptional
          customer experiences through intelligent automation, strategic
          consulting, and custom technology solutions.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px] font-sans font-semibold text-white transition-colors hover:bg-black border-0">
            Start Your AI Journey
            <FramerArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
