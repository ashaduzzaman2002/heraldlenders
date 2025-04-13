import { motion } from "framer-motion";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 pt-20 md:pt-0`}
      >
        {/* Discount Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex-1 font-poppins font-semibold xl:text-[72px]  text-[52px] text-white xl:leading-[100.8px] leading-[75px]"
          >
            Unlock the <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Door to</span>{" "}
          </motion.h1>

          {/* Get Started Button (Visible in Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="ss:flex hidden md:mr-4 mr-0"
          >
            <GetStarted />
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-poppins font-semibold xl:text-[68px] text-[52px] text-white xl:leading-[100.8px] leading-[75px] w-full"
        >
          Your New Home.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non,
          obcaecati necessitatibus aut, quis repudiandae perspiciatis laborum
          eveniet.
        </motion.p>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* Gradient Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
        />
      </motion.div>

      {/* Get Started Button (Visible in Mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        className={`ss:hidden ${styles.flexCenter}`}
      >
        <GetStarted />
      </motion.div>
    </section>
  );
};

export default Hero;
