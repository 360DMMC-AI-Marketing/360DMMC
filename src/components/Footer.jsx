// Import necessary tools from React and other libraries
import React from "react";
import { NavLink } from "react-router"; // For navigation links
import { ArrowUpRight } from "lucide-react"; // Icon component
import bluegraylogo360dmmc from "../assets/logoFiles/bluegraylogo360dmmc.png"; // Company logo

// List of navigation menu items
// Each item has a label (what users see) and a path (where it goes)
const navLinks = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Process", to: "/process" },
];

// List of social media links
const socialLinks = [
  {
    label: "Facebook",
    to: "https://www.facebook.com/61568610867692/",
  },
  {
    label: "LinkedIn",
    to: "https://www.linkedin.com/company/360dmmc",
  },
];

// Main Footer component - this is what gets displayed on the page
const Footer = () => {
  return (
    // Main footer container with styling
    <footer className="bg-white text-black px-4 sm:px-10 md:px-20 pt-20 pb-5">
      {/* Container that holds left and right sections */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-16">
        {/* LEFT SECTION - Logo and description */}
        <aside className="max-w-md">
          {/* Company logo */}
          <img
            src={bluegraylogo360dmmc}
            alt="360DMMC logo"
            className="w-40 mb-5"
          />
          {/* Company description text */}
          <p className="text-base sm:text-xl mb-5">
            Empowering small and medium businesses <br />
            with AI-driven transformation, <br />
            strategic marketing, and <br />
            custom technology solutions.
          </p>
        </aside>

        {/* RIGHT SECTION - Navigation and Social links */}
        {/* Changed gap here to control spacing between the two columns */}
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-20 lg:grid lg:grid-cols-2 lg:gap-24">
          {/* Navigation menu */}
          <nav className="flex flex-col">
            {/* Loop through each navigation link and create a clickable item */}
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label} // Unique identifier for React
                to={to} // Where the link goes
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security feature for external links
                className="link link-hover text-lg sm:text-xl mb-5"
              >
                {label} {/* Display the link text */}
              </NavLink>
            ))}
          </nav>

          {/* Social media links section */}
          {/* The gap-5 here ONLY controls spacing inside this social section */}
          <nav className="flex flex-col gap-3">
            {/* Loop through each social media link */}
            {socialLinks.map(({ label, to }) => (
              // React.Fragment lets us group elements without adding extra HTML
              <React.Fragment key={label}>
                {/* Social media link with arrow icon */}
                <NavLink
                  to={to}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security for external links
                  className="text-lg sm:text-xl flex items-center justify-between gap-15 px-2 group"
                >
                  {label} {/* Display social media name */}
                  {/* Arrow icon that animates on hover */}
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 ease-in-out group-hover:translate-y-2 group-hover:rotate-45"
                  />
                </NavLink>
                {/* Horizontal line after each social link */}
                <hr className="border-[#222222]/25" />
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer so it can be used in other files
export default Footer;
