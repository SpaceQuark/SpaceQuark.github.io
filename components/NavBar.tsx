import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
// import { postsDir, tagsDir } from "../utils/routes";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import Logo from "./Logo";
import GitHub from "./GitHub";

const NavBar = () => {
  const pathname = usePathname();

  const [isRotated, setIsRotated] = useState(false);
  const controls = useAnimation();

  const handleButtonClick = async () => {
    setIsRotated(!isRotated);
  };

  return (
    <nav
      // backdrop-blur-[20px]
      className={`fixed z-10 flex min-w-full items-center justify-between px-4 py-4  backdrop-saturate-[1.8] backdrop-filter sm:px-10 `}
    >
      <div className={"mx-auto flex w-full max-w-5xl justify-between"}>
        <div
          className={`navbar flex items-center space-x-3 text-xs sm:space-x-8 sm:text-lg`}
        >
          <motion.button
            className="group ml-4 "
            whileHover={{ scale: 1.1 }}
            onClick={handleButtonClick}
            animate={{
              rotate: isRotated ? 720 : 0,
              transition: { duration: 0.5 },
            }}
          >
            <Link href="/">
              <Logo />
            </Link>
          </motion.button>
          <motion.button
            className="group ml-4 "
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link href="/projects">
              <span
                className="absolute inset-0 scale-0 rounded-lg bg-gradient-to-r 
  from-green-300 to-blue-300 opacity-0 transition-all group-hover:scale-150 group-hover:opacity-50"
              ></span>
              Projects
            </Link>
          </motion.button>
          <motion.button
            className="group ml-4 "
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link rel="preload" href={`/cool`}>
              <span
                className="absolute inset-0 scale-0 rounded-lg bg-gradient-to-r 
  from-blue-300 to-violet-300 opacity-0 transition-all group-hover:scale-150 group-hover:opacity-50"
              ></span>
              Cool
            </Link>
          </motion.button>
        </div>
        <div className={`navbar flex items-center space-x-2 sm:space-x-6`}>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
