import Link from "next/link";
import JumboSubtitle from "./JumboSubtitle";
import JumboTitle from "./JumboTitle";

const MainHeader = () => {
  return (
    <div className="rounded-2xl flex flex-row space-x-4 justify-start items-end">
      <JumboTitle>
        Lit<span className="text-accent">.</span> Blog
      </JumboTitle>
      <JumboSubtitle>
        My silly little pessimistic poems and short stories
      </JumboSubtitle>
    </div>
  );
};

export default MainHeader;
