import React from "react";
import { VisitUs } from "../components/visitUs";
import { ContactForm } from "../components/ContactForm";
import { HeroContact } from "../components/HeroContact";

const Contact = () => {
  return (
    <>
      <div className=" max-sm:mx-10 mx-[30%] my-10 flex justify-center item-center gap-20 max-sm:block">
        <div className="flex flex-col items-start justify-start max-sm:block max-sm:mb-10">
          <HeroContact></HeroContact>
          <VisitUs></VisitUs>
        </div>
        <ContactForm></ContactForm>
      </div>
    </>
  );
};
export default Contact;
