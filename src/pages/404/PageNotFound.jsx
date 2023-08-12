import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound h-[700px] pt-[200px] ">
      <ContentWrapper className={`text-center text-dark-light flex flex-col`}>
        <span className="bigText text-[150px] font-[500]">404</span>
        <span className="smallText text-[44px]">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
