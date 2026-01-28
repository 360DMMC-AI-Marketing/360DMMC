import { CheckCircle2, Mail } from "lucide-react";
import React from "react";

export const HeroContact = () => {
  return (
    <>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#222222]/25 px-4 py-1 text-[12px] font-semibold tracking-wide">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#23378C]">
            <Mail className="text-white" size={12} />
          </span>
          Get in Touch
        </div>
      </div>

      <h1 className="font-semibold text-4xl pb-3 max-sm:text-3xl max-sm:leading-tight">
        Tell Us Your Ideas, Let's <br /> Make It Happen!
      </h1>

      <div className="my-6">
        <div className="flex text-sm items-center gap-2 mb-3">
          <CheckCircle2 className="w-5"></CheckCircle2>
          <p>Expect a response from us within 24 hours</p>
        </div>
        <div className="flex text-sm items-center gap-2 mb-3">
          <CheckCircle2 className="w-5"></CheckCircle2>
          <p>We’re happy to sign an NDA upon request.</p>
        </div>
        <div className="flex text-sm items-center gap-2 mb-3">
          <CheckCircle2 className="w-5"></CheckCircle2>
          <p>Get access to a team of dedicated product specialists.</p>
        </div>
      </div>
    </>
  );
};
