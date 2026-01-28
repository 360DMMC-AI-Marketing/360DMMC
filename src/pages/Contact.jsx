import React from "react";
import { HeroContact } from "../components/heroContact";
import { VisitUs } from "../components/visitUs";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className=" max-sm:mx-10 mx-30 my-10 flex justify-between item-center max-sm:block">
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
