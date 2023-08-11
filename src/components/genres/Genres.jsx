import { useSelector } from "react-redux";

const Genres = ({ data, className }) => {
  const { genres } = useSelector((store) => store.home);

  return (
    <div className={`flex gap-[5px] ${className}`}>
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div
            className="bg-pink py-[3px] px-[5px] text-[12px] rounded-[4px] whitespace-nowrap"
            key={g}
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
