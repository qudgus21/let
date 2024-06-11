import React, { useState } from "react";
import Gnb from "./components/gnb";
import Sidebar from "./components/sideBar";
import man from "./assets/man.png";
import blurman from "./assets/blurman.png";

const App = () => {
  const [a, setA] = useState({
    "ADAS Cancellation": [
      "",
      "1.1± 0.9",
      "1.4±1.1",
      "1.4±1.0",
      "1.4±1.1",
      "1.4±1.2",
      "1.4±1.1",
      "1.4±1.0",
      "1.3± 0.9",
    ],
    "ADAS Commands": [
      "",
      "0.1± 0.3",
      "1.2±1.1",
      "0.1±0.3",
      "0.5±0.6",
      "0.5±0.8",
      "0.8±0.8",
      "0.5±0.6",
      "0.4± 0.6",
    ],
    "ADAS Comprehension": [
      "",
      "0.1± 0.2",
      "0.3±0.5",
      "0.1±0.3",
      "0.1±0.3",
      "0.3±0.5",
      "0.3±0.5",
      "0.2±0.1",
      "0.1± 0.2",
    ],
    "ADAS Concentration": [
      "",
      "0.0± 0.0",
      "0.2±0.3",
      "0.0±0.1",
      "0.1±0.3",
      "0.1±0.3",
      "0.1±0.3",
      "0.1±0.3",
      "0.0± 0.2",
    ],
    "ADAS Delayed Word Recall": [
      "",
      "1.0± 0.5",
      "0.1±0.5",
      "1.1±0.8",
      "1.1±0.8",
      "1.1±0.8",
      "1.1±0.8",
      "1.1±0.8",
      "1.1±0.8",
    ],
    "ADAS Executive": [
      "",
      "7.0± 1.2",
      "8.2±1.3",
      "7.3±0.8",
      "8.1±1.1",
      "8.3±1.1",
      "8.4±1.2",
      "8.2±1.2",
      "7.5±1.1",
    ],
  });

  const [b, setB] = useState({
    "ADAS Naming": [
      "",
      "0.1±0.2",
      "1.0±1.2",
      "0.2±0.3",
      "0.3±0.5",
      "0.6±0.8",
      "1.0±1.3",
      "0.5±0.6",
      "10.3±0.5",
    ],
    "ADAS Orientation": [
      "",
      "1.0±0.5",
      "0.6±0.6",
      "0.8±0.5",
      "0.6±0.5",
      "0.5±0.6",
      "0.6±0.8",
      "0.8±0.6",
      "0.8±0.5",
    ],
    "ADAS Remember Instructions": [
      "",
      "3.0±1.2",
      "3.3±1.5",
      "3.2±1.5",
      "3.1±1.6",
      "3.2±1.7",
      "3.4±1.6",
      "3.4±1.6",
      "3.3±1.1",
    ],
    "ADAS Spoken Language": [
      "",
      "1.0±0.5",
      "0.5±0.8",
      "0.8±0.5",
      "0.5±1.0",
      "0.5±0.5",
      "0.5±0.3",
      "0.5±0.8",
      "0.5±0.5",
    ],
    "ADAS Word Finding": [
      "",
      "0.1±0.3",
      "0.4±0.5",
      "0.1±0.3",
      "0.2±0.3",
      "0.3±0.4",
      "0.4±0.3",
      "0.3±0.5",
      "0.2±0.3",
    ],
    "ADAS Word Recongnition": [
      "",
      "0.1±0.2",
      "0.8±1.2",
      "0.3±0.2",
      "0.2±0.5",
      "0.5±0.6",
      "0.6±0.8",
      "0.5±0.6",
      "0.3±0.5",
    ],
  });

  const [c, setC] = useState({
    "CDR Community ": [
      "",
      "0.1±0.2",
      "1.0±1.2",
      "0.2±0.3",
      "0.3±0.5",
      "0.6±0.8",
      "1.0±1.3",
      "0.5±0.6",
      "10.3±0.5",
    ],
    "": [
      "",
      "1.0±0.5",
      "0.6±0.6",
      "0.8±0.5",
      "0.6±0.5",
      "0.5±0.6",
      "0.6±0.8",
      "0.8±0.6",
      "0.8±0.5",
    ],
    "CDR Judgement": [
      "",
      "3.0±1.2",
      "3.3±1.5",
      "3.2±1.5",
      "3.1±1.6",
      "3.2±1.7",
      "3.4±1.6",
      "3.4±1.6",
      "3.3±1.1",
    ],
    "": [
      "",
      "1.0±0.5",
      "0.5±0.8",
      "0.8±0.5",
      "0.5±1.0",
      "0.5±0.5",
      "0.5±0.3",
      "0.5±0.8",
      "0.5±0.5",
    ],
    "ADAS Word Finding": [
      "",
      "0.1±0.3",
      "0.4±0.5",
      "0.1±0.3",
      "0.2±0.3",
      "0.3±0.4",
      "0.4±0.3",
      "0.3±0.5",
      "0.2±0.3",
    ],
    "ADAS Word Recongnition": [
      "",
      "0.1±0.2",
      "0.8±1.2",
      "0.3±0.2",
      "0.2±0.5",
      "0.5±0.6",
      "0.6±0.8",
      "0.5±0.6",
      "0.3±0.5",
    ],
  });

  return (
    <div className="bg-black w-max h-full text-white">
      <Gnb />
      <div className="h-[138px]"></div>
      <div className="w-fit flex gap-[83px]">
        <Sidebar />
        <div className="w-full h-full">
          <div className="font-bold text-[50px] mb-[10px]">
            Participant’s Baseline in Alzheimer’s Disease
          </div>
          <div className="font-bold text-[30px]">
            Study ID : CPAD | Patient ID : 9QW2U
          </div>
          <div className="flex flex-col">
            <div className="bg-[#171717] h-[107px] mt-[20px] flex w-fit">
              <div className="w-[100px] border border-solid border-black"></div>
              <div className="w-[400px]"></div>
              <img
                src={man}
                className="cursor-pointer w-[133px] h-[104px] bg-gray"
                alt="icon"
              />{" "}
              <img
                src={blurman}
                className="cursor-pointer w-[133px] h-[104px] bg-[#171717] border-r border-solid border-black"
                alt="icon"
              />
              <img
                src={blurman}
                className="cursor-pointer w-[133px] h-[104px] bg-[#171717] border-r border-solid border-black"
                alt="icon"
              />
              <img
                src={blurman}
                className="cursor-pointer w-[133px] h-[104px] bg-[#171717] border-r border-solid border-black"
                alt="icon"
              />
              <img
                src={blurman}
                className="cursor-pointer w-[133px] h-[104px] bg-[#171717] border-r border-solid border-black"
                alt="icon"
              />
              <img
                src={blurman}
                className="cursor-pointer w-[133px] h-[104px] bg-[#171717] border-r border-solid border-black"
                alt="icon"
              />
              <img
                src={blurman}
                className="cursor-pointer w-[133px] h-[104px] bg-[#171717] border-r border-solid border-black"
                alt="icon"
              />
              <img
                src={blurman}
                className="cursor-pointer w-[133px] h-[104px] bg-[#171717] border-r border-solid border-black"
                alt="icon"
              />
              <img
                src={blurman}
                className="cursor-pointer w-[133px] h-[104px] bg-[#171717]"
                alt="icon"
              />
            </div>
            <div className="text-[#8057FF] text-[30px] font-bold h-[46px] flex items-center">
              <div className="w-[100px] pl-[24px]"></div>
              <div className="w-[400px] pl-[24px]">Time (months)</div>
              <div className="w-[133px] text-center">Baseline</div>
              <div className="w-[133px] text-center">3</div>
              <div className="w-[133px] text-center">6</div>
              <div className="w-[133px] text-center">9</div>
              <div className="w-[133px] text-center">12</div>
              <div className="w-[133px] text-center">15</div>
              <div className="w-[133px] text-center">18</div>
              <div className="w-[133px] text-center">21</div>
              <div className="w-[133px] text-center">24</div>
            </div>
            <div className="flex bg-[#D9D9D94D] w-fit">
              <div className="pt-[8px] text-[#00FFC2] text-[30px] font-bold w-[100px] border-r border-solid border-black flex justify-center">
                ADAS
              </div>
              <div className="flex flex-col text-[30px]">
                {Object.entries(c).map(([key, values]) => (
                  <div key={key} className="flex cursor-pointer group">
                    <div className="w-[400px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]">
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => (
                        <div
                          key={index}
                          className={`flex w-[133px] h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                            (index !== 0 || index !== values.length - 1) &&
                            "border-r border-solid border-black"
                          }`}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pl-[24px]"></div>
              </div>
            </div>
            <div className="text-white h-[46px] flex items-center text-[30px]">
              <div className="w-[100px] h-full"></div>
              <div className="w-[400px] pl-[24px] h-full flex items-center">
                ADAS Ideational
              </div>
              <div className="bg-[#594c80] w-[133px] h-full flex items-center justify-center">
                0
              </div>
              <div className="w-[133px] h-full flex items-center justify-center">
                4.0±0.2
              </div>
              <div className="w-[133px] h-full flex items-center justify-center">
                3.0±1.2
              </div>
              <div className="w-[133px] h-full flex items-center justify-center">
                4.2±0.3
              </div>
              <div className="w-[133px] h-full flex items-center justify-center">
                3.2±1.3
              </div>
              <div className="w-[133px] h-full flex items-center justify-center">
                3.4±1.3
              </div>
              <div className="w-[133px] h-full flex items-center justify-center">
                3.4±1.3
              </div>
              <div className="w-[133px] h-full flex items-center justify-center">
                3.2±1.2
              </div>
              <div className="w-[133px] h-full flex items-center justify-center">
                4.5±0.9
              </div>
            </div>
            <div className="flex bg-[#D9D9D94D] w-fit border-b border-solid border-black">
              <div className="pt-[8px] text-[#00FFC2] text-[30px] font-bold w-[100px] border-r border-solid border-black flex justify-center"></div>
              <div className="flex flex-col text-[30px]">
                {Object.entries(b).map(([key, values]) => (
                  <div key={key} className="flex cursor-pointer group">
                    <div className="w-[400px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]">
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => (
                        <div
                          key={index}
                          className={`flex w-[133px] h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                            (index !== 0 || index !== values.length - 1) &&
                            "border-r border-solid border-black"
                          }`}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pl-[24px]"></div>
              </div>
            </div>
            <div className="flex bg-[#D9D9D94D] w-fit border-b border-solid border-black">
              <div className="pt-[8px] text-[#00FFC2] text-[30px] font-bold w-[100px] border-r border-solid border-black flex justify-center">
                CDR
              </div>
              <div className="flex flex-col text-[30px]">
                {Object.entries(a).map(([key, values]) => (
                  <div key={key} className="flex cursor-pointer group">
                    <div className="w-[400px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]">
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => (
                        <div
                          key={index}
                          className={`flex w-[133px] h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                            (index !== 0 || index !== values.length - 1) &&
                            "border-r border-solid border-black"
                          }`}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pl-[24px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
