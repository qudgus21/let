import side from "../assets/side.png";
import down from "../assets/down.png";
import { useState } from "react";

const Sidebar = () => {
  const [left1, setLeft1] = useState("");
  const [left2, setLeft2] = useState("");
  const [left3, setLeft3] = useState("");
  const [left4, setLeft4] = useState("");
  const [left5, setLeft5] = useState("");
  const [left6, setLeft6] = useState("");
  const [left7, setLeft7] = useState("");
  const [left8, setLeft8] = useState("");
  const [left9, setLeft9] = useState("");
  const [left10, setLeft10] = useState("");
  const [left11, setLeft11] = useState("");
  const [left12, setLeft12] = useState("");
  const [left13, setLeft13] = useState("");
  const [left14, setLeft14] = useState("");

  const handleClickTest = () => {
    setLeft1('82');
    setLeft2('Male');
    setLeft3('1');
    setLeft4('AD');
    setLeft5('70.2kg');
    setLeft6('170cm');
    setLeft7('-');
    setLeft8('-');
    setLeft9('-');
    setLeft10('No');
    setLeft11('No');
    setLeft12('Male');
    setLeft13('Whte');
    setLeft14('Alzheimer');
  }

  return (
    <div className="!w-fit !h-full overflo!w-y-auto">
      <div className="!h-[256px] flex relative mb-[33px]">
        <div className="bg-[#00FFC2] !w-[12px] !h-full"></div>
        <div className="bg-[#2f1a7a] !w-[457px] !h-full rounded-tr-[16px] rounded-br-[16px]"></div>
        <img
          src={side}
          className="cursor-pointer absolute bottom-0 ml-[22px]"
          alt="icon"
        />
      </div>
      <div className="flex flex-col pl-[54px]">
        <div className="flex gap-[19px] pb-[38px]">
          <div className="border-t-[4px] border-solid border-white !w-[306px] pt-[7px] leading-[1.4]">
            <div className="text-[25px]">Age ( years )</div>
            <div className="text-[25px]">Sex</div>
            <div className="text-[25px]">ApoE e4 count</div>
          </div>
          <div className="!w-[90px] border-t-[4px] border-solid border-white pt-[7px] leading-[1.4] font-bold">
            <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left1}
                onChange={(e) => {
                  setLeft1(e.target.value)
                }}
              ></input>
            </div>
            <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left2}
                onChange={(e) => {
                  setLeft2(e.target.value)
                }}
              ></input>
            </div>
            <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left3}
                onChange={(e) => {
                  setLeft3(e.target.value)
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="flex gap-[19px] pb-[38px]">
          <div className="border-t-[4px] border-solid border-white !w-[306px] pt-[7px] leading-[1.4]">
            <div className="text-[25px]">Diagnosis</div>
            <div className="text-[25px]">Weight</div>
            <div className="text-[25px]">Height</div>
          </div>
          <div className="!w-[90px] border-t-[4px] border-solid border-white pt-[7px] leading-[1.4] font-bold">
          <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left4}
                onChange={(e) => {
                  setLeft4(e.target.value)
                }}
              ></input>
            </div>
            <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left5}
                onChange={(e) => {
                  setLeft5(e.target.value)
                }}
              ></input>
            </div>
            <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left6}
                onChange={(e) => {
                  setLeft6(e.target.value)
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="flex gap-[19px] pb-[38px]">
          <div className="border-t-[4px] border-solid border-white !w-[306px] pt-[7px] leading-[1.4]">
            <div className="text-[25px]">Amyloid Status</div>
            <div className="text-[25px]">CSF Total tau</div>
            <div className="text-[25px]">CSF p-tau181</div>
          </div>
          <div className="!w-[90px] border-t-[4px] border-solid border-white pt-[7px] leading-[1.4] font-bold">
          <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left7}
                onChange={(e) => {
                  setLeft7(e.target.value)
                }}
              ></input>
            </div>
            <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left8}
                onChange={(e) => {
                  setLeft8(e.target.value)
                }}
              ></input>
            </div>
            <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left9}
                onChange={(e) => {
                  setLeft9(e.target.value)
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="flex gap-[19px] pb-[38px]">
          <div className="border-t-[4px] border-solid border-white !w-[306px] pt-[7px] leading-[1.4]">
            <div className="text-[25px]">History of Hypertension</div>
            <div className="text-[25px]">History of Type ll Diabetes</div>
          </div>
          <div className="!w-[90px] border-t-[4px] border-solid border-white pt-[7px] leading-[1.4] font-bold">
          <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left10}
                onChange={(e) => {
                  setLeft10(e.target.value)
                }}
              ></input>
            </div>
            <div className="!h-[35px]">
              <input
                className="flex !w-[133px] items-center justify-center text-left bg-black text-white outline-none text-[25px] !w-[80px] !!h-[35px]"
                value={left11}
                onChange={(e) => {
                  setLeft11(e.target.value)
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[54px] text-[30px] font-bold mb-[130px]">
        <div className="flex gap-[15px] mb-[30px]">
          <div className="px-[25px] !h-[60px] bg-[#5825F5] text-white flex items-center justify-center rounded-[50px] w-[140px]">
            <input
                className="text-white outline-none bg-[#5825F5] w-full text-center"
                value={left12}
                onChange={(e) => {
                  setLeft12(e.target.value)
                }}
            ></input>
          </div>
          <div className="px-[25px] !h-[60px] flex items-center justify-center rounded-[50px] w-[140px] bg-white text-[#681BFF]">
            <input
                className="outline-none bg-white text-[#681BFF] w-full text-center"
                value={left13}
                onChange={(e) => {
                  setLeft13(e.target.value)
                }}
            ></input>
          </div>
        </div>
        <div className="px-[25px] !h-[60px] bg-[#00FFC2] text-[#681BFF] rounded-[50px] flex items-center justify-center w-[217px]">
          <input
                className="outline-none  bg-[#00FFC2] text-[#681BFF] w-full text-center"
                value={left14}
                onChange={(e) => {
                  setLeft14(e.target.value)
                }}
          ></input>
        </div>
        {/* <div onClick={handleClickTest} className="bg-white bg-opacity-20 w-fit px-[10px] py-[5px] rounded-[50px] mt-[20px] cursor-pointer font-normal text-[25px]">Test</div> */}
      </div>
       <div className="pl-[54px] cursor-pointer mb-[50px]">
        <img
          src={down}
          className="cursor-pointer !w-[85px] !h-[85px]s"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Sidebar;
