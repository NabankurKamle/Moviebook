import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div
      className={`videoPopup ${
        show ? "visible opacity-100" : "invisible  opacity-0"
      } flex justify-center items-center w-full h-full fixed top-0 left-0 z-[10]`}
    >
      <div
        className="opacityLayer absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.75)] backdrop-blur-[3.5px] [-webkit-backdrop-filter:blur(3.5px)] opacity-0 transition-opacity duration-300"
        onClick={hidePopup}
      ></div>
      <div
        className={`videoPlayer relative w-[800px] aspect-video bg-white  transition-transform duration-300 ${
          show ? "scale-100" : "scale-[0.2]"
        }`}
      >
        <span
          className="closeBtn absolute top-[-20px] right-0 text-white cursor-pointer"
          onClick={hidePopup}
        >
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
