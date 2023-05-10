const JumboSubtitle = (props: {children: string | React.ReactNode}) => {
    return (<h2 className={"text-2xl lg:text-4xl font-light text-stone-600 dark:text-stone-400 font-serif"}>{props.children}</h2>)
};

export default JumboSubtitle;