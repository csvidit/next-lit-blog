const Header = (props: {children: React.ReactNode}) => {
  return (
    <div className="rounded-2xl flex flex-row space-x-4 justify-start items-end">
      {props.children}
    </div>
  );
};

export default Header;
