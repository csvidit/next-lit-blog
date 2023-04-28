import Image from "next/image";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import JumboTitle from "@/components/JumboTitle";
import JumboSubtitle from "@/components/JumboSubtitle";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <MainContainer>
      <MainContent>
        <Hero />
        <Spotlight />
      </MainContent>
      <NavBar />
    </MainContainer>
  );
}
