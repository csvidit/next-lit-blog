import Subtitle from "./Subtitle";
import Title from "./Title";
import Image from "next/image";
import TitleLink from "./TitleLink";
import Link from "next/link";
import JumboTitle from "./JumboTitle";
import SpotlightTitle from "./SpotlightTitle";
import DesignOne from "./DesignOne";
import { BsClock, BsCalendar, BsArrowRight} from "react-icons/bs";

const Card = () => {
  return (
    <Link
      href="/"
      className="p-8 rounded-2xl flex flex-col space-y-4 justify-start bg-stone-100 shadow-2xl shadow-accent group hover:transition-all border border-transparent"
    >
      <div className="flex flex-row space-x-4 w-full">
        <div className="rounded-2xl flex flex-col space-y-4 justify-start">
          <div className="flex flex-col space-y-2">
            <TitleLink>The Desert Dunes of Egypt</TitleLink>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row items-center space-x-2">
                <BsClock />
                <p>25 min read</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <BsCalendar />
                <p>December 21, 2022</p>
              </div>
            </div>
          </div>

          <p className="text-stone-600 font-sans">
            The desert dunes of Egypt are a stunning natural wonder. These
            massive sand formations, sculpted by the wind over thousands of
            years, stretch for miles across the vast expanses of the countrys
            deserts.
          </p>
          <div className="rounded-full flex flex-row space-x-2 items-center text-accent">
            <p className="group-hover:italic">Read it</p>
            <BsArrowRight className="group-hover:transition-all group-hover:translate-x-2 group-hover:ease-in-out group-hover:duration-300"/>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
