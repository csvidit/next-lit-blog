import Link from "next/link";
import NavItem from "./NavItem";

const NavBar = () => {
    return (
    <nav className="z-10 px-4 py-2 rounded-2xl fixed bottom-16 w-10/12 self-center bg-stone-100 shadow-2xl shadow-accent flex flex-row space-x-4 justify-between items-center">
        <Link href="/" className="flex flex-row items-center font-serif">
            <div>Lit<span className="text-accent">.</span> Blog</div>
        </Link>
        <div className="flex flex-row items-center space-x-4 font-sans ">
            <NavItem href="/short-stories">Short Stories</NavItem>
            <NavItem href="/poems">Poems</NavItem>
        </div>
    </nav>)
};

export default NavBar;