const Spinner = ({ initial }) => {
  return (
    <div
      className={`loadingSpinner w-full  relative flex items-center justify-center ${
        initial ? "h-[700px]" : "h-[150px]"
      }`}
    >
      <svg
        className="spinner animate-[rotate_2s_linear_infinite] z-[2] w-[50px] h-[50px] "
        viewBox="0 0 50 50"
      >
        <circle
          className="path stroke-[rgb(147,191,236)] [stroke-linecap:round] animate-[dash_1.5s_ease-in-out_infinite]"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

export default Spinner;
