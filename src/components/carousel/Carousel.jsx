import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((store) => store.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="w-[125px] md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0 ">
        <div className="w-full aspect-[1/1.5] rounded-[12px] mb-[30px] skeleton animate-[shimmer_1s_infinite]"></div>
        <div className="flex flex-col">
          <div className="w-full h-[20px] mb-[10px] skeleton animate-[shimmer_1s_infinite]"></div>
          <div className="w-[75%] h-[20px] skeleton animate-[shimmer_1s_infinite]"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-[50px]">
      <ContentWrapper className="relative">
        {title && <div className="text-[24px] mb-[20px]">{title}</div>}
        {data?.length > 0 ? (
          <>
            <BsFillArrowLeftCircleFill
              className="text-[30px] text-pink absolute top-[44%] translate-y-[-50%] cursor-pointer opacity-50 z-[1] hidden md:block hover:opacity-80 left-[30px]"
              onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill
              className="text-[30px] text-pink absolute top-[44%] translate-y-[-50%] cursor-pointer opacity-50 z-[1] hidden md:block hover:opacity-80 right-[30px]"
              onClick={() => navigation("right")}
            />
          </>
        ) : null}

        {loading ? (
          <div className="flex gap-[10px] ml-[-20px] overflow-y-hidden mr-[-20px] px-[20px] md:gap-[20px] md:overflow-hidden md:m-0 md:p-0">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        ) : (
          <div
            ref={carouselContainer}
            className="flex gap-[10px] ml-[-20px] overflow-y-hidden mr-[-20px] px-[20px] md:gap-[20px] md:overflow-hidden md:m-0 md:p-0"
          >
            {data?.length > 0 ? (
              data?.map((item) => {
                const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterFallback;
                return (
                  <div
                    onClick={() =>
                      navigate(`/${item?.media_type || endpoint}/${item?.id}`)
                    }
                    key={item?.id}
                    className={`w-[125px] md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] cursor-pointer flex-shrink-0 `}
                  >
                    <div className="relative w-full aspect-[1/1.5] bg-cover bg-center mb-[30px] flex items-end justify-between p-[10px] posterBlock">
                      <Img
                        className={`w-full h-full object-center object-cover`}
                        src={posterUrl}
                      />
                      <CircleRating
                        className="w-[40px] h-[40px] relative top-[30px] bg-white flex-shrink-0 md:w-[50px] md:h-[50px] circle"
                        rating={item?.vote_average.toFixed(1)}
                      />
                      <Genres
                        className={`hidden relative md:flex md:flex-wrap md:justify-end`}
                        data={item?.genre_ids.slice(0, 2)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] mb-[10px] leading-[24px] md:text-[20px]">
                        {item.title || item.name}
                      </span>
                      <span className="text-[14px] opacity-50">
                        {dayjs(item.release_Date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-[16px] text-dark-light">
                {" "}
                No Result Found !!!
              </div>
            )}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
