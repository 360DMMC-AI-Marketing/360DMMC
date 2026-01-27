import React from "react";
import { NavLink } from "react-router";
import bluegraylogo360dmmc from "../assets/logoFiles/bluegraylogo360dmmc.png";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-black px-4 sm:px-10 md:px-20 pt-20 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-16">
          {/* Left */}
          <aside className="max-w-md">
            <img
              src={bluegraylogo360dmmc}
              alt="360dmmc logo"
              className="w-40 mb-5"
            />
            <p className="text-base sm:text-xl mb-5">
              Empowering small and medium businesses <br />
              with AI-driven transformation, <br />
              strategic marketing, and <br />
              custom technology solutions.
            </p>
          </aside>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
            {/* Navigation */}
            <nav className="flex flex-col">
              <NavLink
                className="link link-hover text-lg sm:text-xl mb-5"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className="link link-hover text-lg sm:text-xl mb-5"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="link link-hover text-lg sm:text-xl mb-5"
                to="/careers"
              >
                Careers
              </NavLink>
              <NavLink
                className="link link-hover text-lg sm:text-xl mb-5"
                to="/process"
              >
                Process
              </NavLink>
            </nav>

            {/* Social */}
            <nav className="flex flex-col gap-5">
              <NavLink
                to=""
                className="text-lg sm:text-xl flex items-center justify-between gap-6 px-3 group"
              >
                Facebook
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-y-2 group-hover:rotate-45"
                />
              </NavLink>
              <hr className="text-[#222222]/25" />

              <NavLink
                to="https://www.linkedin.com/company/360dmmc"
                className="text-lg sm:text-xl flex items-center justify-between gap-6 px-3 group"
              >
                LinkedIn
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-y-2 group-hover:rotate-45"
                />
              </NavLink>
              <hr className="text-[#222222]/25" />
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
