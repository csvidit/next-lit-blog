import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import NavBar from "@/components/NavBar";
import Spotlight from "@/components/Spotlight";
import MainHeader from "@/components/MainHeader";
import Header from "@/components/Header";
import JumboTitle from "@/components/JumboTitle";
import Card from "@/components/Card";

export default function Home() {
  return (
    <MainContainer>
      <MainContent>
        <Header>
          <div className="rounded-2xl flex flex-row space-x-4 justify-start items-end">
            <JumboTitle>
              Short Stories<span className="text-accent">.</span>
            </JumboTitle>
          </div>
        </Header>
        <div className="grid grid-cols-2 gap-x-16 gap-y-16">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </MainContent>
      <NavBar />
    </MainContainer>
  );
}
