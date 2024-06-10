import React from "react";
import logo from "../assets/logo.png";
import icon1 from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import profile from "../assets/profile.png";

const Gnb = () => {
  return (
    <div className="h-[138px] w-full flex justify-between items-center pl-[56px] pr-[42px] fixed top-0 bg-black !z-10">
      <img src={logo} className="w-[283px] h-[54px]" alt="logo" />
      <div className="flex items-center">
        <div className="flex items-center justify-end w-fit gap-[39px] pr-[28px]">
          <img
            src={icon1}
            className="h-[30px] w-[30px] cursor-pointer"
            alt="icon"
          />
          <img
            src={icon2}
            className="h-[30px] w-[30px] cursor-pointer"
            alt="icon"
          />
          <img
            src={icon3}
            className="h-[30px] w-[30px] cursor-pointer"
            alt="icon"
          />
        </div>
        <div className="pl-[28px] border-l border-solid border-white">
          <img
            src={profile}
            className="h-[64px] w-[64px] cursor-pointer"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Gnb;
