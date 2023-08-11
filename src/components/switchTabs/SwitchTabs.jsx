import { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, i) => {
    setLeft(i * 100);
    setTimeout(() => {
      setSelectedTab(i);
    }, 300);

    onTabChange(tab);
  };

  return (
    <div className="h-[34px] bg-white rounded-[20px] p-[2px]">
      <div className="flex items-center h-[30px] relative">
        {data.map((tab, i) => (
          <span
            key={i}
            className={`h-full flex items-center justify-center w-[100px]  text-[14px] relative z-[1] cursor-pointer transition-colors ease-linear duration-300  ${
              selectedTab === i ? "text-white" : "text-dark"
            } `}
            onClick={() => activeTab(tab, i)}
          >
            {tab}
          </span>
        ))}
        <span
          className="h-[30px] w-[100px] rounded-[15px] bg-gradient-button absolute left-0 transition-[left] [transition-timing-function:cubic-bezier(0.88_-0.35_0.565_1.35)]  duration-500"
          style={{ left }}
        />
      </div>
    </div>
  );
};

export default SwitchTabs;
