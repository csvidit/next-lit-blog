import styles from "./Emphasis.module.css"

const Emphasis = (props: { children: string | React.ReactNode }) => {
  return (
    <em className={"inline text-accent selection:bg-rose-950 selection:text-accent dark:selection:text-violet-500 not-italic px-1"}>{props.children}</em>
  );
};

export default Emphasis;