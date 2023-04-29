import Subtitle from "./Subtitle";
import Image from "next/image";
import TitleLink from "./TitleLink";
import Link from "next/link";
import { BsClock, BsCalendar, BsArrowRight} from "react-icons/bs";
import { UrlObject } from "url";

const Card = (props: {label: string | React.ReactNode; read_time: number; date: string | number; children: string | React.ReactNode, href: string | UrlObject}) => {
  return (
    <Link
      href="/"
      className="p-8 rounded-2xl flex flex-col space-y-4 justify-start bg-stone-100 shadow-2xl shadow-accent group hover:duration-500 hover:ease-in-out hover:transition-all border border-transparent"
    >
      <div className="flex flex-row space-x-4 w-full">
        <div className="rounded-2xl flex flex-col space-y-4 justify-start">
          <div className="flex flex-col space-y-2">
            <TitleLink>The Desert Dunes of Egypt</TitleLink>
            <div className="flex flex-row space-x-4 text-xs uppercase">
              <div className="flex flex-row items-center space-x-2">
                <BsClock />
                <p>{props.read_time} min read</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <BsCalendar />
                <p>{new Date(props.date).toLocaleDateString("en-US", {
                dateStyle: "long",
              })}</p>
              </div>
            </div>
          </div>

          <p className="text-stone-600 font-sans">
            {props.children}
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
