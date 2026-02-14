import React, { useState } from "react";
import FramerArrow from "./FramerArrow";
import { Mail, MapPin } from "lucide-react";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle typing
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit to HubSpot
  const handleSubmit = async (e) => {
    e.preventDefault();

    const hubspotData = {
      fields: [
        { name: "firstname", value: formData.name },
        { name: "email", value: formData.email },
        { name: "message", value: formData.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/242979007/35792b95-df71-4dc7-99b3-631991d2395b",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hubspotData),
        },
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const err = await response.json();
        console.error(err);
        toast.error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="
          w-[500px] max-sm:w-full
          rounded-2xl max-sm:rounded-xl
          border border-gray-200
          p-8 max-sm:p-5
          flex flex-col gap-5
          bg-white shadow-sm mt-10
        "
      >
        <h1 className="font-semibold text-center text-black text-4xl max-sm:text-xl">
          Schedule A Meeting
        </h1>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Share your message"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm resize-none outline-none focus:border-gray-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer w-30 max-sm:w-full group inline-flex items-center justify-center gap-2 rounded-full bg-[#23378C] px-5 py-3 text-[15px] font-semibold text-white hover:bg-black transition-colors"
        >
          Submit
          <FramerArrow />
        </button>
      </form>

      {/* Contact Info (mobile) */}
      <div className="mt-10 text-sm font-bold lg:hidden md:hidden">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3">
            <span className="flex h-6 w-6 items-center justify-center">
              <Mail className="text-orange-500" size={20} />
            </span>
            <p className="font-sans text-[16px]">Get In Touch</p>
          </div>
        </div>

        <div className="flex items-center gap-6 mb-3">
          <MapPin className="w-7 text-gray-700" />
          <p className="text-gray-700">
            1 East Erie Street, Suite 525-2501 Chicago, IL 60611
          </p>
        </div>

        <div className="flex items-center gap-6 mb-3">
          <Mail className="w-5 text-gray-700" />
          <a
            href="mailto:Consult@360DMMC.com"
            className="text-gray-700 underline"
          >
            Consult@360DMMC.com
          </a>
        </div>

        <div className="flex items-center gap-6 mb-3">
          <img
            src="https://cdn.simpleicons.org/whatsapp/364153"
            alt="WhatsApp"
            className="w-5"
          />
          <p className="text-gray-700">+1 844 491-3441</p>
        </div>
      </div>
    </div>
  );
};
