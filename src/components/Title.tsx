const Title = (props: {children: string | React.ReactNode}) => {
    return (<h1 className="text-4xl font-serif">{props.children}</h1>)
};

export default Title;