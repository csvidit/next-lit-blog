import Subtitle from "./Subtitle";
import Title from "./Title";
import Image from "next/image";
import TitleLink from "./TitleLink";
import Link from "next/link";
import JumboTitle from "./JumboTitle";
import SpotlightTitle from "./SpotlightTitle";
import DesignOne from "./DesignOne";

const Card = () => {
  return (
    <Link
      href="/"
      className="p-8 rounded-2xl flex flex-col space-y-4 justify-start bg-stone-100 shadow-2xl shadow-accent group hover:transition-all border border-transparent"
    >
      <div className="flex flex-row space-x-4 w-full">
        <div className="rounded-2xl flex flex-col space-y-2 justify-start">
          <TitleLink>The Desert Dunes of Egypt</TitleLink>
          <Subtitle>
            The desert dunes of Egypt are a stunning natural wonder. These
            massive sand formations, sculpted by the wind over thousands of
            years, stretch for miles across the vast expanses of the countrys
            deserts.
          </Subtitle>
        </div>
      </div>
    </Link>
  );
};

export default Card;
