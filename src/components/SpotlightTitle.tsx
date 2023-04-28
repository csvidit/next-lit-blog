const SpotlightTitle = (props: {children: string | React.ReactNode}) => {
    return (<h1 className="text-6xl font-serif italic font-light">{props.children}<span className="text-accent"></span></h1>)
};

export default SpotlightTitle;