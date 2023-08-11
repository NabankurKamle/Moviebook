import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <div
      className="movieCard w-[calc(50%-5px)] mb-[25px] cursor-pointer flex-shrink-0 md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)]"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock group-hover:opacity-50 relative w-full aspect-[1/1.5] bg-cover bg-center mb-[30px] flex items-end justify-between p-[10px] transition-all ease-linear duration-500 movieCard">
        <Img
          className="posterImg w-full h-full object-cover object-center"
          src={posterUrl}
        />
        {!fromSearch && (
          <>
            <CircleRating
              className={`w-[40px] h-[40px] relative top-[30px] bg-white flex-shrink-0 md:w-[50px] md:h-[50px] `}
              rating={data.vote_average.toFixed(1)}
            />
            <Genres
              className={`hidden relative md:flex md:[flex-flow:wrap] md:justify-end`}
              data={data.genre_ids.slice(0, 2)}
            />
          </>
        )}
      </div>
      <div className="textBlock flex flex-col group">
        <span className="title text-[16px] mb-[10px] leading-[24px] md:text-[20px] ">
          {data?.title || data?.name}
        </span>
        <span className="date text-[14px] opacity-50">
          {dayjs(data?.release_date)?.format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
