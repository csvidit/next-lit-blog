import Link from "next/link";
import NavItem from "./NavItem";
import { RxDividerVertical } from "react-icons/rx";

const NavBar = () => {
  return (
    <nav className="z-10 px-4 py-2 rounded-2xl fixed bottom-16 w-10/12 self-center bg-stone-100 dark:bg-stone-950 shadow-2xl shadow-accent dark:shadow-violet-600 flex flex-row space-x-4 justify-between items-center">
      <div className="flex flex-row items-center space-x-2 font-serif">
        <Link
          href="/"
          className="flex flex-row items-center font-serif text-xl"
        >
          <div>
            Lit<span className="text-accent dark:text-violet-500">.</span> Blog
          </div>
        </Link>
        <p><RxDividerVertical/></p>
        <NavItem primary href="/short-stories">Vidit Khandelwal</NavItem>
      </div>

      <div className="flex flex-row items-center space-x-4 font-sans ">
        <NavItem href="/short-stories">Short Stories</NavItem>
        <NavItem href="/poems">Poems</NavItem>
      </div>
    </nav>
  );
};

export default NavBar;
