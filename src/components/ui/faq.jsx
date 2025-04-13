import { motion } from "framer-motion";
import styles from "../../style";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const Faq3 = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = [],
}) => {
  return (
    <motion.section
      id="faq"
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="space-y-16">
        <div className="w-full flex flex-col text-center sm:mb-16 mb-6 relative z-[1]">
          <h2 className={styles.heading2}>{heading}</h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`max-w-[450px] mx-auto ${styles.paragraph}`}>
              {description}
            </p>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-4xl flex flex-col gap-7"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={String(item.id)}
                className="border-0 w-full bg-black-gradient px-6 rounded-[20px] transition-opacity duration-200 hover:opacity-60"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                  <div className="text-muted-foreground lg:text-lg">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};

export default Faq3;
