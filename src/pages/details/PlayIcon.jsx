export const PlayIcon = ({ className }) => {
  return (
    <svg
      className={`w-[60px] md:w-[80px] group ${className}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="80px"
      height="80px"
      viewBox="0 0 213.7 213.7"
      enableBackground="new 0 0 213.7 213.7"
      xmlSpace="preserve"
    >
      <polygon
        className="triangle [stroke-dasharray:240] [stroke-dashoffset:480] [stroke:white] translate-y-0 transition-all duration-700 ease-in-out group-hover:[stroke-dashoffset:0] group-hover:opacity-100 group-hover:stroke-pink animate-[trailorPlay_0.7s_ease-in-out]"
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="73.5,62.5 148.5,105.8 73.5,149.1 "
      ></polygon>
      <circle
        className="circle [stroke-dasharray:650] [stroke-dashoffset:1300] [stroke:white] transition-all duration-500 ease-in-out group-hover:[stroke-dashoffset:0] group-hover:stroke-pink"
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        cx="106.8"
        cy="106.8"
        r="103.3"
      ></circle>
    </svg>
  );
};
