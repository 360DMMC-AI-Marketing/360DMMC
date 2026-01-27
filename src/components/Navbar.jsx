import React from "react";
import bluegraylogo360dmmc from "../assets/logoFiles/bluegraylogo360dmmc.png";
import { NavLink } from "react-router";
import FramerArrow from "./FramerArrow";

const navBtnClass =
  "btn border-0 shadow-none rounded-full bg-white text-black hover:bg-black hover:text-white";

const Navbar = () => {
  const links = () => (
    <>
      <li>
        <NavLink to="/services" className={navBtnClass}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navBtnClass}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/careers" className={navBtnClass}>
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink to="/process" className={navBtnClass}>
          Process
        </NavLink>
      </li>
    </>
  );

  const mobileLinks = () => (
    <>
      <li className="p-3">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="p-3">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="p-3">
        <NavLink to="/careers">Careers</NavLink>
      </li>
      <li className="p-3">
        <NavLink to="/process">Process</NavLink>
      </li>

      {/* Mobile CTA */}
      <li className="p-3">
        <NavLink
          to="/contact"
          className="btn border-0 shadow-none rounded-full w-full group inline-flex items-center gap-2 text-sm font-medium"
        >
          Get Started
          <FramerArrow />
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar border-b border-black/5 px-5 sm:px-10 lg:px-20 flex items-center h-16 py-4">
      {/* Logo */}
      <div className="navbar-start">
        <NavLink to="/">
          <img src={bluegraylogo360dmmc} alt="360DMMC logo" className="w-40" />
        </NavLink>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6 lg:gap-10">
          {links()}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        {/* Desktop CTA */}
        <div className="hidden sm:flex">
          <NavLink
            to="/contact"
            className="btn border-0 shadow-none bg-[#23378C] hover:bg-black rounded-full group inline-flex items-center gap-2 text-sm font-medium text-white"
          >
            Get Started
            <FramerArrow />
          </NavLink>
        </div>

        {/* Mobile menu */}
        <div className="dropdown dropdown-end sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm bg-white dropdown-content rounded-box z-50 mt-3 w-52 shadow">
            {mobileLinks()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
