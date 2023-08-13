import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setLoading(false);
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <>
      <div className="min-h-[700px] pt-[100px]">
        {loading ? (
          <Spinner initial={true} />
        ) : (
          <ContentWrapper>
            {data?.results?.length > 0 ? (
              <>
                <div className="text-[24px] leading-[34px] mb-[25px]">{`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}</div>
                <InfiniteScroll
                  className="flex [flex-flow:row_wrap] gap-[10px] mb-[50px] md:gap-[20px]"
                  dataLength={data?.results?.length || []}
                  next={fetchNextPageData}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner />}
                >
                  {data?.results?.map((item, i) => {
                    if (item.media_type === "person") return;

                    return <MovieCard key={i} data={item} fromSearch={true} />;
                  })}
                </InfiniteScroll>
              </>
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center">
                <span className="text-[24px] text-dark-light">
                  Sorry, results are not available!
                </span>
                <img className="h-[500px]" src={noResults} alt="" />
              </div>
            )}
          </ContentWrapper>
        )}
      </div>
    </>
  );
};

export default SearchResult;
