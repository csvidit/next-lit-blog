import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import NavBar from "@/components/NavBar";
import Spotlight from "@/components/Spotlight";
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <MainContainer>
      <MainContent>
        <MainHeader />
        <Spotlight />
        <Spotlight />
      </MainContent>
      <NavBar />
    </MainContainer>
  );
}
