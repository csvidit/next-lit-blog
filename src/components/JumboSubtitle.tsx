const JumboSubtitle = (props: {children: string | React.ReactNode}) => {
    return (<h2 className={"text-4xl font-light text-stone-600 font-sans"}>{props.children}</h2>)
};

export default JumboSubtitle;