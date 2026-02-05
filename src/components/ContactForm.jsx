import React from "react";
import FramerArrow from "./FramerArrow";

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
          className="
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
    </div>
  );
};
