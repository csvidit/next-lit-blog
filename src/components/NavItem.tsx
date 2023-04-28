import Link from "next/link";
import { UrlObject } from "url";
import { motion } from "framer-motion";
import {BsArrowRightShort} from "react-icons/bs"

const NavItem = (props: {
  href: string | UrlObject;
  children: string | React.ReactNode;
}) => {
  return (
    <Link href={props.href} className="flex flex-row space-x-1 items-center group">
      <motion.div className="flex flex-row items-center p-2 rounded-lg text-stone-600 hover:transition-all hover:bg-stone-200 hover:text-accent hover:italic">{props.children}
      <BsArrowRightShort className="scale-0 group-hover:scale-100 group-hover:transition-transform"/></motion.div>
    </Link>
  );
};

export default NavItem
