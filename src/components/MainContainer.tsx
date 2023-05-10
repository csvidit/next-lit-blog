import styles from "./MainContainer.module.css"

const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className={"w-screen h-full flex flex-col space-y-8 justify-center items-center scroll-smooth bg-beige dark:bg-stone-900 dark:text-stone-100"}>{props.children}</div>
  );
};

export default MainContainer;
