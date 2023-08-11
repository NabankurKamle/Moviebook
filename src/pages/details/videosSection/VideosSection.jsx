import { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { PlayIcon } from "../PlayIcon";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem w-[150px] flex-shrink-0 md:w-[25%]">
        <div className="thumb w-full aspect-video rounded-[12px] mb-[10px] skeleton animate-[shimmer_1s_infinite]"></div>
        <div className="row h-[20px] w-full rounded-[10px] mb-[10px] skeleton animate-[shimmer_1s_infinite]"></div>
        <div className="row2 h-[20px] w-[75%] rounded-[10px] skeleton animate-[shimmer_1s_infinite]"></div>
      </div>
    );
  };

  return (
    <div className="videosSection relative mb-[50px]">
      <ContentWrapper>
        <div className="sectionHeading text-[24px] mb-[25px]">
          Official Videos
        </div>
        {!loading ? (
          <div className="videos flex gap-[10px] overflow-x-auto mr-[-20px] ml-[-20px] px-[20px] md:gap-[20px] md:m-0 md:p-0">
            {data?.results?.map((video) => (
              <div
                className="w-[150px] flex-shrink-0 md:w-[25%] cursor-pointer"
                key={video.id}
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="mb-[15px] relative">
                  <Img
                    className={`w-full block rounded-[12px] transition-all duration-700 ease-in-out`}
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                </div>
                <div className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]">
                  {video.name}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton flex gap-[10px] overflow-x-auto mr-[-20px] ml-[-20px] px-[20px] md:gap-[20px] md:m-0 md:p-0">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
