import React from "react";
import Faq3 from "../components/ui/faq";
import styles from "../style";
import { useAppContext } from "../context/AppContext";
import { faqData } from "../data";

const FAQs = () => {
  const { countryCode } = useAppContext();

  const faqs = faqData[countryCode] || faqData["CA"];
  return (
    <div className={`bg-primary mt-16 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Faq3 items={faqs} />
      </div>
    </div>
  );
};

export default FAQs;
