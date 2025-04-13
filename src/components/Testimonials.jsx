import { useInView } from "react-intersection-observer";
import styles from "../style";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { testimonialsData } from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";
import { TestimonialCard } from "./testimonial-card";
import Autoplay from "embla-carousel-autoplay"

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { countryCode } = useAppContext();

  const testimonials = testimonialsData[countryCode] || testimonialsData["CA"];

  return (
    <motion.section
      ref={ref}
      id="testimonials"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Decoration */}
      <motion.div
        className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />

      {/* Header Section */}
      <motion.div
        className="w-full flex flex-col text-center sm:mb-16 mb-6 relative z-[1]"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className={`${styles.paragraph} max-w-[450px] mx-auto mt-6`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </motion.div>

      {/* Animated Testimonials */}
      <div className="w-full">
        <Carousel  plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="w-full">
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 w-full h-full">
                  <TestimonialCard data={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
        {/* <TestimonialsSection
          
          testimonials={testimonials}
        /> */}
      </div>
    </motion.section>
  );
};

export default Testimonials
