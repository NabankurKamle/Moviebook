import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import { PlayIcon } from "../PlayIcon";
import PosterFallback from "../../../assets/no-poster.png";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((store) => store.home);

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="w-full bg-dark pt-[100px] mb-[50px] md:mb-0 md:pt-[120px] md:min-h-[700px]">
      {!loading ? (
        <>
          {!!data && (
            <>
              <div className="w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden details">
                <Img
                  className={`w-full h-full object-cover object-center`}
                  src={url.backdrop + data?.backdrop_path}
                />
              </div>
              <div className="w-full h-[250px] bg-gradient-to-b from-[rgba(4,21,45,0)] to-[#04152d_80%] absolute bottom-0 left-0" />
              <ContentWrapper>
                <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                  <div className="flex-shrink-0">
                    {data.poster_path ? (
                      <Img
                        className={`w-full block rounded-[12px] md:max-w-[350px]`}
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img
                        className={`w-full block rounded-[12px] md:max-w-[350px]`}
                        src={PosterFallback}
                      />
                    )}
                  </div>
                  <div className="mb-[50px]">
                    <div className="text-[28px] leading-[40px] md:text-[34px] md:leading-[44px]">{`${
                      data?.name || data?.title
                    } (${dayjs(data?.release_date).format("YYYY")})`}</div>

                    <div className="text-[16px] leading-[24px] mb-[15px] opacity-50 md:text-[20px] md:leading-[28px]">
                      {data?.tagline}
                    </div>
                    <Genres
                      className={`mb-[25px] [flex-flow:row_wrap]`}
                      data={_genres}
                    />
                    <div className="flex items-center gap-[25px] mb-[25px]">
                      <CircleRating
                        className={`max-w-[70px] bg-dark2 md:max-w-[90px]`}
                        rating={data?.vote_average.toFixed(1)}
                      />
                      <div
                        className="playBtn group"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video?.key);
                        }}
                      >
                        <PlayIcon className="w-[60px] md:w-[80px]" />
                        <span className="text text-[20px] group-hover:text-pink transition-all duration-700 ease-in-out">
                          Watch Trailer
                        </span>
                      </div>
                    </div>
                    <div className="mb-[25px]">
                      <div className="text-[24px] mb-[10px]">Overview</div>
                      <div className="leading-[24px] md:pr-[100px]">
                        {data?.overview}
                      </div>
                    </div>
                    <div className="border-b border-solid border-b-[rgba(255, 255, 255, 0.1)] py-[15px] flex">
                      {data.status && (
                        <div className="mr-[10px] flex [flex-flow:row_wrap]">
                          <span className="mr-[10px] font-[600] opacity-100 leading-[24px]">
                            Status:{" "}
                          </span>
                          <span className="mr-[10px] leading-[24px] opacity-50">
                            {data.status}
                          </span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="mr-[10px] flex [flex-flow:row_wrap]">
                          <span className="mr-[10px] font-[600] opacity-100 leading-[24px]">
                            Release Date:{" "}
                          </span>
                          <span className="mr-[10px] leading-[24px] opacity-50">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="mr-[10px] flex [flex-flow:row_wrap]">
                          <span className="mr-[10px] font-[600] opacity-100  leading-[24px]">
                            Runtime:{" "}
                          </span>
                          <span className="mr-[10px] leading-[24px] opacity-50">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                      <div className="border-b border-solid border-[rgba(255, 255, 255, 0.1)] py-[15px] flex">
                        <span className="mr-[10px] leading-[24px] font-[600]">
                          Director:{" "}
                        </span>
                        <span className="mr-[10px] leading-[24px] opacity-50">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name} {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {writer?.length > 0 && (
                      <div className="border-b border-solid border-[rgba(255, 255, 255, 0.1)] py-[15px] flex">
                        <span className="mr-[10px] leading-[24px] font-[600]">
                          Writer:{" "}
                        </span>
                        <span className="mr-[10px] leading-[24px] opacity-50">
                          {writer?.map((w, i) => (
                            <span key={i}>
                              {w.name} {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {data?.created_by?.length > 0 && (
                      <div className="border-b border-solid border-[rgba(255, 255, 255, 0.1)] py-[15px] flex">
                        <span className="mr-[10px] leading-[24px] font-[600]">
                          Creator:{" "}
                        </span>
                        <span className="mr-[10px] leading-[24px] opacity-50">
                          {data?.created_by?.map((c, i) => (
                            <span key={i}>
                              {c.name}{" "}
                              {data?.created_by?.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </>
          )}
        </>
      ) : (
        <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
          <ContentWrapper className={`flex gap-[50px]`}>
            <div className="flex-shrink-0 w-full block rounded-[12px] aspect-[1/1.5] md:max-w-[350px] skeleton animate-[shimmer_1s_infinite]"></div>
            <div className="w-full">
              <div className="w-full h-[25px] mb-[20px] rounded-[50px] skeleton animate-[shimmer_1s_infinite]"></div>
              <div className="w-[75%] h-[25px] mb-[50px] rounded-[50px] skeleton animate-[shimmer_1s_infinite]"></div>
              <div className="w-full h-[25px] mb-[20px] rounded-[50px] skeleton animate-[shimmer_1s_infinite]"></div>
              <div className="w-full h-[25px] mb-[20px] rounded-[50px] skeleton animate-[shimmer_1s_infinite]"></div>
              <div className="w-[50%] h-[25px] mb-[50px] rounded-[50px] skeleton animate-[shimmer_1s_infinite]"></div>
              <div className="w-full h-[25px] mb-[20px] rounded-[50px] skeleton animate-[shimmer_1s_infinite]"></div>
              <div className="w-full h-[25px] mb-[20px] rounded-[50px] skeleton animate-[shimmer_1s_infinite]"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
