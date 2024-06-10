import React from "react";
import Gnb from "./components/gnb";
import Sidebar from "./components/sideBar";

const App = () => {
  return (
    <div className="bg-black w-fit h-full text-white">
      <Gnb />
      <div className="h-[138px]"></div>
      <div className="w-fit flex">
        <Sidebar />
        <div className="w-full h-full w-[1757px]">
          <div className="font-bold text-[50px] mb-[10px]">
            Participant’s Baseline in Alzheimer’s Disease
          </div>
          <div className="font-bold text-[30px]">
            Study ID : CPAD | Patient ID : 9QW2U
          </div>
          <div className="h-[107px] pl-[553px]">123</div>
        </div>
      </div>
    </div>
  );
};

export default App;
