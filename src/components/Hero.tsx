import JumboSubtitle from "./JumboSubtitle";
import JumboTitle from "./JumboTitle";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <JumboTitle>
        The Lit<span className="text-accent">.</span> Blog
      </JumboTitle>
      <JumboSubtitle>Vidit Khandelwal</JumboSubtitle>
    </div>
  );
};

export default Hero;