import React from "react";
import Faq3 from "./ui/faq";
import { Link } from "react-router-dom";
import { faqData } from "../data";
import { useAppContext } from "../context/AppContext";

const FaqSection = () => {
  const { countryCode } = useAppContext();
  const faqs = faqData[countryCode] || faqData["CA"];
  return (
    <div>
      <Faq3 items={faqs.slice(0, 8)} />
      <div className="flex justify-center ">
        <Link
          to="/faqs"
          className={`py-3 xl:py-4 mx-auto px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default FaqSection;
