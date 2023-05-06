const MainContent = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-11/12 lg:w-10/12 h-full flex flex-col bg-transparent py-8 lg:py-16 space-y-8 lg:space-y-16">
      {props.children}
    </div>
  );
};

export default MainContent;
