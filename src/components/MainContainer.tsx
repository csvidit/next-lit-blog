import styles from "./MainContainer.module.css"

const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className={"w-screen h-screen flex flex-col space-y-8 justify-center items-center scroll-smooth bg-beige"}>{props.children}</div>
  );
};

export default MainContainer;
