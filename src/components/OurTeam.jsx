import { Anchor } from "lucide-react";
import React, { useEffect, useState } from "react";

export const OurTeam = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data.team))
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="bg-white px-4 pt-20 pb-12">
        <div className="mx-auto max-w-6xl text-center">
          {/* Top pill */}
          <div className="mb-8 flex justify-center">
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 rounded-full border border-[#222222]/25 px-4 py-1 text-[12px] font-semibold tracking-wide"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#23378C] p-1">
                <Anchor className="text-white" size={12} />
              </span>
              Our Team
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-30 max-sm:mx-5 max-sm:text-lg font-heading text-3xl font-extrabold leading-tight text-black">
            The Minds Driving Our Success
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6 max-w-3xl text-xl sm:text-[18px] leading-relaxed text-black/70">
            We’re more than a service provider; we’re a team of driven
            professionals dedicated to helping you elevate your brand’s full
            potential through intelligent solutions.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="bg-white px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center"
              >
                {/* Image */}
                <div className="mb-4 h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-base font-semibold text-black">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm text-black/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
