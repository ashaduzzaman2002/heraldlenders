import { useEffect, useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Landmark } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 flex py-4 px-6 justify-between items-center transition-all duration-300 xl:px-0 sm:px-16 ${
        scrolled ? "bbg-black-gradient backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-2 text-white"
      >
        <Landmark className="" />{" "}
        <span className="text-2xl">
        Herald<span className="text-[#3FC6D6]">Lenders</span>
        </span>
      </motion.div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
          key={nav.id}
          whileHover={{ scale: 1.1 }}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === nav.title ? "text-white" : "text-dimWhite"
          } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive(nav.title)}
        >
            <a href={`${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`  ${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
