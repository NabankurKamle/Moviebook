import React from "react";
import { useSelector } from "react-redux";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle w-[125px] h-[125px] rounded-[50%] mb-[15px] md:w-[175px] md:h-[175px] md:mb-[25px] skeleton animate-[shimmer_1s_infinite]"></div>
        <div className="row w-full h-[20px] rounded-[10px] mb-[10px] skeleton animate-[shimmer_1s_infinite]"></div>
        <div className="row2 w-[75%] h-[20px] rounded-[10px] mx-auto skeleton animate-[shimmer_1s_infinite]"></div>
      </div>
    );
  };
  return (
    <div className="castSection relative mb-[50px]">
      <ContentWrapper>
        <div className="sectionHeading text-[24px] mb-[25px]">Top Cast</div>
        {!loading ? (
          <div className="listItems flex gap-[20px] overflow-y-hidden mr-[-20px] ml-[-20px] px-[20px] md:m-0 md:p-0">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div className="text-center" key={item.id}>
                  <div className="w-[125px] h-[125px] rounded-[50%] overflow-hidden mb-[15px] md:w-[175px] md:h-[175px] md:mb-[25px]">
                    <Img
                      className={`w-full h-full object-cover object-[center_top] block`}
                      src={imgUrl}
                    />
                  </div>
                  <div className="text-[14px] leading-[20px] font-[600] md:text-[18px] md:leading-[24px]">
                    {item.name}
                  </div>
                  <div className="text-[14px] leading-[20px] opacity-50 md:text-[16px] md:leading-[24px]">
                    {item.character}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton flex gap-[20px] overflow-y-hidden mr-[-20px] ml-[-20px] px-[20px] md:m-0 md:p-0">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
