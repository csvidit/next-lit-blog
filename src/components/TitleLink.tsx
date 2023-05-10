import { motion } from "framer-motion";
import Link from "next/link";

const TitleLink = (props: { children: string | React.ReactNode }) => {
  return (
    <Link href="/" className="relative flex flex-row space-x-1 items-end w-max group">
      <h1 className="text-4xl font-serif z-10">
        {props.children}
        {/* <span className="group-hover:hidden text-[#FF4552]">.</span> */}
      </h1>
      {/* <motion.div className="transition-all group-hover:bg-[#FF4552] rounded-full w-full h-1 -translate-y-2 bg-transparent"></motion.div> */}
      <motion.div className="absolute -right-2 group-hover:right-0 group-hover:w-full transition-all rounded-full w-1 h-1 -translate-y-2 bg-accent dark:bg-violet-600"></motion.div>
    </Link>
  );
};

export default TitleLink;
