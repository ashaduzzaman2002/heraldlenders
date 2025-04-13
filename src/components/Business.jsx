import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className={`flex flex-row xl:p-6 p-3 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section 
      ref={ref} 
      id="about" 
      className={layout.section}
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.6 }}
    >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          ABOUT Herald Lenders
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          At Herald Lenders, our commitment is to your financial success. We strive to provide a seamless loan experience, from application to approval and beyond. Our goal is to build long-lasting relationships with our clients, founded on trust, reliability, and exceptional service.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
          Join the thousands of satisfied customers who have chosen Herald Lenders Loans as their trusted financial partner. Let us help you achieve your financial goals with confidence and ease.
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Business;
