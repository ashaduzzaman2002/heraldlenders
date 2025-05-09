
import styles from "../style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "../components";
import FaqSection from "../components/FAQSection";
import Contact from "../components/Contact";

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
   

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        {/* <Billing />
        <CardDeal /> */}
        <Testimonials />
        <FaqSection />
        <Clients />
        <CTA />

        <Contact />
       
      </div>
    </div>
  </div>
);

export default Home;
