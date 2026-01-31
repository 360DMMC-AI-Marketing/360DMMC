import React from "react";
import { Send } from "lucide-react";
import FramerArrow from "./FramerArrow";

const positions = [
  "Marketing Intern",
  "Business Development Intern",
  "Web Development Intern",
  "UX/UI Design Intern",
  "AI/ML Intern",
  "Data Analytics Intern",
];

export const ApplyForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect backend / email service later
    console.log("Form submitted (UI only)");
  };

  return (
    <section className="bg-white py-10 px-4 max-sm:mx-5">
      <div className="max-w-xl mx-auto border border-gray-300 rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#222222]">
            Apply Now
          </h2>
          <p className="font-sans text-gray-600 mt-2">
            Fill out the form below to apply for an internship position.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="font-sans text-sm font-medium text-[#222222]">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="Your Full Name"
              className="mt-1 font-sans text-sm w-full border border-gray-300 rounded-lg px-4 py-2
              focus:outline-none focus:border-[#23378C]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-sans text-sm font-medium text-[#222222]">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="mt-1 font-sans text-sm w-full border border-gray-300 rounded-lg px-4 py-2
              focus:outline-none focus:border-[#23378C]"
            />
          </div>

          {/* Position */}
          <div>
            <label className="font-sans text-sm font-medium text-[#222222]">
              Position *
            </label>
            <select
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 bg-white
              focus:outline-none focus:none font-normal font-sans"
            >
              <option value="">Select a position</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

          {/* Attachment */}
          <div>
            <label className="font-sans text-sm font-medium text-[#222222]">
              Resume / CV *
            </label>
            <input
              type="file"
              required
              className="mt-1 w-full text-sm text-gray-600
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:bg-[#23378C] file:text-white
                hover:file:opacity-90"
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-sans text-sm font-medium text-[#222222]">
              Why do you want to join us?
            </label>
            <textarea
              rows="4"
              placeholder="Tell us briefly about yourself and why you're interested..."
              className="mt-1 w-full border border-gray-300 font-sans text-sm rounded-lg px-4 py-2
              focus:outline-none focus:border-[#23378C]"
            />
          </div>

          {/* Info */}
          <p className="font-sans text-xs text-gray-500">
            * Or simply send your resume/CV to{" "}
            <span className="font-medium text-[#23378C]">
              careers@360dmmc.com
            </span>{" "}
            with your application.
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px]  font-sans font-semibold text-white transition-colors hover:bg-black border-0"
          >
            Submit Application
            <FramerArrow />
          </button>
        </form>
      </div>
    </section>
  );
};
