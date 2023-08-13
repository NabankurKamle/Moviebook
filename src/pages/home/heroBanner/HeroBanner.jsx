import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { url } = useSelector((store) => store.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const handleSearchButton = () => {
    navigate(`/search/${query}`);
  };

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <div className="w-full h-[450px] bg-dark flex items-center relative md:h-[700px]">
        {!loading && (
          <div className="w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden heroBanner">
            <Img src={background} />
          </div>
        )}
        <div className="w-full h-[250px] bg-gradient-to-b from-[rgba(4,21,45,0)] to-[#04152d_80%] absolute bottom-0 left-0" />
        <ContentWrapper>
          <div className="flex flex-col items-center text-white text-center relative max-w-[800px] mx-auto">
            <span className="text-[50px] font-[500] mb-[10px] md:mb-0 md:text-[90px] ">
              Welcome
            </span>
            <span className="text-[18px] font-[500] mb-[40px] md:text-[24px]">
              Millons of movies, TV shows and people to discover. Explore now
            </span>
            <div className="flex items-center w-full">
              <input
                className="w-[calc(100%-100px)] h-[50px] bg-white outline-none border-none rounded-[30px_0_0_30px] text-black px-[15px] text-[14px] md:w-[calc(100%-150px)] md:h-[60px] md:text-[20px] md:px-[30px]"
                type="text"
                placeholder="Search any movie of tv show..."
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={handleSearchButton}
                className="w-[100px] h-[50px] bg-gradient-button outline-none rounded-[0_30px_30px_0] text-[16px] cursor-pointer md:w-[150px] md:h-[60px] md:text-[18px]"
              >
                Search
              </button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default HeroBanner;
