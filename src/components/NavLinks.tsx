import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";

const NavLinks = (props: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          layout
          className={`w-full p-4 flex-col`}
          initial={{ opacity: 0, translateX: 0 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 0 }}
          transition={{
            type: "tween",
            duration: 0.2,
            delay: 0.1,
          }}
        >
          <AnimatePresence>
            <motion.div
              layout
              className="flex flex-col items-end space-y-4 font-sans"
            >
              <NavItem href="/short-stories">Short Stories</NavItem>
              <NavItem href="/poems">Poems</NavItem>
              <NavItem href="/essays">Essays</NavItem>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavLinks;

// + ${
//     props.isOpen ? "flex" : "hidden"
//   }

// absolute right-0 bottom-[125%]
