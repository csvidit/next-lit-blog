const Subtitle = (props: {children: string | React.ReactNode}) => {
    return (<h2 className={"text-xl text-stone-600 dark:text-stone-400 font-sans"}>{props.children}</h2>)
};

export default Subtitle;