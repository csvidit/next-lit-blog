import Subtitle from "./Subtitle";
import Title from "./Title";
import Image from "next/image";
import TitleLink from "./TitleLink";

const Spotlight = () => {
  return (
    <div className="flex flex-col space-y-4 justify-start">
      <Title>Whats New</Title>
      <div className="flex flex-row space-x-4 w-full">
        <Image
          className="rounded-2xl"
          alt="Desert"
          width={400}
          height={200}
          src="/unsplash-1.jpg"
        ></Image>
        <div className="rounded-2xl flex flex-col space-y-2 justify-start">
          <TitleLink>The Desert Dunes of Egypt</TitleLink>
          <Subtitle>
            The desert dunes of Egypt are a stunning natural wonder. These
            massive sand formations, sculpted by the wind over thousands of
            years, stretch for miles across the vast expanses of the country's
            deserts.
          </Subtitle>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
