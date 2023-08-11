const ContentWrapper = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1200px] my-0 mx-auto py-0 px-[20px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
