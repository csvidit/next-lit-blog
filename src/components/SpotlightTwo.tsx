import Subtitle from "./Subtitle";
import Title from "./Title";
import Image from "next/image";
import TitleLink from "./TitleLink";
import Link from "next/link";
import JumboTitle from "./JumboTitle";
import SpotlightTitle from "./SpotlightTitle";
import DesignOne from "./DesignOne";

const SpotlightTwo = () => {
  return (
    <Link
      href="/"
      className="p-4 rounded-2xl shadow-2xl shadow-accent flex flex-col space-y-4 justify-start group hover:transition-all bg-stone-100 border border-transparent hover:border hover:border-stone-600"
    >
      <div className="flex flex-row space-x-4 items-center self-center pb-4">
        <Image
          width={50}
          height={50}
          src="/design-one-a.svg"
          alt="Design"
        ></Image>
        <SpotlightTitle>Featured</SpotlightTitle>
      </div>

      
        <div className="rounded-2xl flex flex-col space-y-2 justify-start">
          <TitleLink>The Desert Dunes of Egypt</TitleLink>
          <Subtitle>
            The desert dunes of Egypt are a stunning natural wonder. These
            massive sand formations, sculpted by the wind over thousands of
            years, stretch for miles across the vast expanses of the countrys
            deserts.
          </Subtitle>
        </div>
      
    </Link>
  );
};

export default SpotlightTwo;
