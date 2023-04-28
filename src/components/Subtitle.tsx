const Subtitle = (props: {children: string | React.ReactNode}) => {
    return (<h2 className={"text-xl text-stone-600 font-sans"}>{props.children}</h2>)
};

export default Subtitle;