import Link from "next/link";
import JumboSubtitle from "./JumboSubtitle";
import JumboTitle from "./JumboTitle";

const MainHeader = () => {
  return (
    <div className="rounded-2xl flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-start lg:items-end">
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
