const MainContent = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-10/12 h-full flex flex-col bg-transparent py-16 space-y-16">
      {props.children}
    </div>
  );
};

export default MainContent;
