import { CheckCircle2, Mail } from "lucide-react";
import React from "react";

export const HeroContact = () => {
  return (
    <>
      <div>
        {/* Top pill */}
        <div className="mb-8 flex ">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
            <span className="flex h-6 w-6 items-center justify-center  p-1">
              <Mail className="text-black" size={20} />
            </span>
            <p className="font-sans text-[16px]">Get In Touch</p>
          </div>
        </div>

        <h1 className="font-extrabold text-[64px] pb-3 max-sm:text-4xl max-sm:leading-tight">
          Tell Us Your Ideas, Let's Make It Happen!
        </h1>

        <div className="my-6">
          <div className="flex text-md items-center gap-2 mb-3">
            <CheckCircle2 className="w-5"></CheckCircle2>
            <p>Expect a response from us within 24 hours</p>
          </div>
          <div className="flex text-md items-center gap-2 mb-3">
            <CheckCircle2 className="w-5"></CheckCircle2>
            <p>We’re happy to sign an NDA upon request.</p>
          </div>
          <div className="flex text-md items-center gap-2 mb-3">
            <CheckCircle2 className="w-5"></CheckCircle2>
            <p>Get access to a team of dedicated product specialists.</p>
          </div>
        </div>
      </div>
    </>
  );
};
