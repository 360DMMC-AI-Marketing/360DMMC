import React from "react";
import FramerArrow from "./FramerArrow";
import { Mail, MapPin } from "lucide-react";

export const ContactForm = () => {
  return (
    <div>
      <form
        className="
          w-[500px]
          max-sm:w-full
          rounded-2xl
          max-sm:rounded-xl
          border border-gray-200
          p-8
          max-sm:p-5
          flex flex-col
          gap-5
          bg-white
          shadow-sm
          mt-10
        "
      >
        <h1 className="font-semibold text-center text-black text-4xl max-sm:text-xl max-sm:leading-tight">
          Schedule A Meeting
        </h1>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="
              w-full
              rounded-lg
              border border-gray-200
              px-4 py-3
              text-sm
              outline-none
              focus:border-gray-400
            "
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="
              w-full
              rounded-lg
              border border-gray-200
              px-4 py-3
              text-sm
              outline-none
              focus:border-gray-400
            "
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            placeholder="Share your message"
            rows={6}
            className="
              w-full
              rounded-lg
              border border-gray-200
              px-4 py-3
              text-sm
              resize-none
              outline-none
              focus:border-gray-400
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className=" cursor-pointer
            w-30
            max-sm:w-full
            group
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#23378C]
            px-5
            py-3
            text-[15px]
            font-sans
            font-semibold
            text-white
            transition-colors
            hover:bg-black
            border-0
          "
        >
          Submit
          <FramerArrow />
        </button>
      </form>
      <div className=" mt-10 text-sm font-sans text-md font-bold lg:hidden md:hidden">
        {/* Top pill */}
        <div className="mb-8 flex max-sm:items-center max-sm:justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
            <span className="flex h-6 w-6 items-center justify-center  p-1">
              <Mail className="text-black" size={20} />
            </span>
            <p className="font-sans text-[16px]">Get In Touch</p>
          </div>
        </div>
        <div className="flex  items-center gap-6 mb-3">
          <MapPin className="w-7 text-gray-700"></MapPin>
          <p className="text-gray-700">
            1 East Erie Street Suite 525-2501 Chicago, IL 60611
          </p>
        </div>
        <div className="flex items-center gap-6 ">
          <Mail className="w-5 text-gray-700"></Mail>
          <p className="text-gray-700">Consult@360DMMC.com</p>
        </div>
      </div>
    </div>
  );
};
