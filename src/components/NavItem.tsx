import Link from "next/link";
import { UrlObject } from "url";
import { motion } from "framer-motion";

const NavItem = (props: {
  href: string | UrlObject;
  children: string | React.ReactNode;
}) => {
  return (
    <Link href={props.href}>
      <motion.div className="flex flex-row items-center p-2 rounded-lg text-stone-600 hover:transition-all hover:bg-stone-200">{props.children}</motion.div>
    </Link>
  );
};

export default NavItem
