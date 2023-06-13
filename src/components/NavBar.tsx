import Link from "next/link";
import NavItem from "./NavItem";
import { RxDividerVertical } from "react-icons/rx";
import { Rotate as Hamburger } from "hamburger-react";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <LayoutGroup>
        <motion.div
          style={{ borderRadius: "16px"}}
          layout
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            duration: 0.2,
          }}
          className="flex flex-col space-y-2 fixed bottom-16 w-10/12 z-50 bg-stone-100 shadow-2xl shadow-accent"
        >
          <NavLinks isOpen={isOpen} />

          <motion.div
            layout
            className="self-center w-full flex flex-row px-4 py-2 justify-between items-center"
          >
            <motion.div
              layout
              className="flex flex-row items-center space-x-2 font-serif"
            >
              <Link
                href="/"
                className="flex flex-row items-center font-serif text-xl"
              >
                <motion.div layout>
                  Lit<span className="text-accent">.</span> Blog
                </motion.div>
              </Link>
              <p>
                <RxDividerVertical />
              </p>
              <NavItem primary href="/short-stories">
                Vidit Khandelwal
              </NavItem>
            </motion.div>
            <motion.div layout className="flex flex-row items-center font-sans">
              <Hamburger size={28} toggled={isOpen} toggle={setIsOpen} />
            </motion.div>
          </motion.div>
        </motion.div>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default NavBar;
