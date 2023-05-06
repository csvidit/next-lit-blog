import Link from "next/link";
import { UrlObject } from "url";
import { motion } from "framer-motion";
import {BsArrowRightShort} from "react-icons/bs"

const NavItem = (props: {
  href: string | UrlObject;
  children: string | React.ReactNode;
  primary?: boolean
}) => {

  if(props.primary)
  {
    return (
      <Link href={props.href} className="flex flex-row space-x-1 items-center group">
        <motion.div className="flex flex-row items-center rounded-lg text-stone-900 text-xl group-hover:ease-in-out group-hover:transition-all group-hover:text-accent group-hover:transform">{props.children}
        <BsArrowRightShort className="scale-0 group-hover:scale-100 group-hover:ease-in-out group-hover:transition-transform"/></motion.div>
      </Link>
    ); 
  }
  return (
    <Link href={props.href} className="flex flex-row space-x-1 items-center group">
      <motion.div className="flex flex-row items-center px-2 py-1 rounded-lg text-stone-600 group-hover:ease-in-out group-hover:transition-all group-hover:bg-stone-200 group-hover:text-accent group-hover:transform group-hover:italic">{props.children}
      <BsArrowRightShort className="scale-0 group-hover:scale-100 group-hover:ease-in-out group-hover:transition-transform"/></motion.div>
    </Link>
  );
};

export default NavItem
