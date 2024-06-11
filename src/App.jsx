import React, { useCallback, useEffect, useState } from "react";
import Gnb from "./components/gnb";
import Sidebar from "./components/sideBar";
import man from "./assets/man.png";
import blurman from "./assets/blurman.png";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const App = () => {
  const [percent, setPercent] = useState(0);
  const [isProgress, setIsProgress] = useState(false);

  const [a0, setA0] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");

  const [sub, setSub] = useState("");

  const [b0, setB0] = useState("");
  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");
  const [b3, setB3] = useState("");
  const [b4, setB4] = useState("");
  const [b5, setB5] = useState("");

  const [c0, setC0] = useState("");
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  const [c4, setC4] = useState("");
  const [c5, setC5] = useState("");

  const [d0, setD0] = useState("");
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");
  const [d4, setD4] = useState("");
  const [d5, setD5] = useState("");
  const [d6, setD6] = useState("");

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
      "3.3±1.2",
      "5.8±1.2",
      "3.2±1.2",
      "4.2±1.5",
      "5.3±0.6",
      "5.6±0.5",
      "4.5±0.5",
      "4.3±0.2",
    ],
    "": [
      "",
      "4.1±2.5",
      "8.3±3.0",
      "5.1±3.0",
      "7.2±3.2",
      "7.9±3.0",
      "8.0±3.0",
      "6.0±3.0",
      "5.5±3.0",
    ],
    "CDR Judgement": [
      "",
      "1.1±0.1",
      "1.0±0.5",
      "1.0±0.3",
      "1.1±0.3",
      "1.2±0.5",
      "1.2±0.5",
      "1.1±0.4",
      "1.0±0.4",
    ],
    "CDR Memory": [
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
    "CDR Orientation": [
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
    "CDR PersonalCare": [
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
  });

  const [d, setD] = useState({
    "MMSE Attention Calculation": [
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
    "MMSE Drawing": [
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
    "MMSE Language": [
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
    "MMSE Orientation Place": [
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
    "MMSE Orientation Time": [
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
    "MMSE Recall": [
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
    "MMSE Registration": [
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
  });

  const getValue = (num, index) => {
    if (num === "a") {
      if (index === 0) return a0;
      if (index === 1) return a1;
      if (index === 2) return a2;
      if (index === 3) return a3;
      if (index === 4) return a4;
      if (index === 5) return a5;
    }

    if (num === "b") {
      if (index === 0) return b0;
      if (index === 1) return b1;
      if (index === 2) return b2;
      if (index === 3) return b3;
      if (index === 4) return b4;
      if (index === 5) return b5;
    }

    if (num === "c") {
      if (index === 0) return c0;
      if (index === 1) return c1;
      if (index === 2) return c2;
      if (index === 3) return c3;
      if (index === 4) return c4;
      if (index === 5) return c5;
    }

    if (num === "d") {
      if (index === 0) return d0;
      if (index === 1) return d1;
      if (index === 2) return d2;
      if (index === 3) return d3;
      if (index === 4) return d4;
      if (index === 5) return d5;
      if (index === 6) return d6;
    }

    if (num === "sub") {
      return sub;
    }
  };

  const handleChange = (e, num, index) => {
    let value = e.target.value;

    if (num === "sub") setSub(value);

    if (num === "a") {
      if (index === 0) setA0(value);
      if (index === 1) setA1(value);
      if (index === 2) setA2(value);
      if (index === 3) setA3(value);
      if (index === 4) setA4(value);
      if (index === 5) setA5(value);
    }

    if (num === "b") {
      if (index === 0) setB0(value);
      if (index === 1) setB1(value);
      if (index === 2) setB2(value);
      if (index === 3) setB3(value);
      if (index === 4) setB4(value);
      if (index === 5) setB5(value);
    }

    if (num === "c") {
      if (index === 0) setC0(value);
      if (index === 1) setC1(value);
      if (index === 2) setC2(value);
      if (index === 3) setC3(value);
      if (index === 4) setC4(value);
      if (index === 5) setC5(value);
    }

    if (num === "d") {
      if (index === 0) setD0(value);
      if (index === 1) setD1(value);
      if (index === 2) setD2(value);
      if (index === 3) setD3(value);
      if (index === 4) setD4(value);
      if (index === 5) setD5(value);
      if (index === 6) setD6(value);
    }
  };

  useEffect(() => {
    if (
      a0.trim() !== "" &&
      a1.trim() !== "" &&
      a2.trim() !== "" &&
      a3.trim() !== "" &&
      a4.trim() !== "" &&
      a5.trim() !== "" &&
      b0.trim() !== "" &&
      b1.trim() !== "" &&
      b2.trim() !== "" &&
      b3.trim() !== "" &&
      b4.trim() !== "" &&
      b5.trim() !== "" &&
      c0.trim() !== "" &&
      c1.trim() !== "" &&
      c2.trim() !== "" &&
      c3.trim() !== "" &&
      c4.trim() !== "" &&
      c5.trim() !== "" &&
      d0.trim() !== "" &&
      d1.trim() !== "" &&
      d2.trim() !== "" &&
      d3.trim() !== "" &&
      d4.trim() !== "" &&
      d5.trim() !== "" &&
      d6.trim() !== "" &&
      sub.trim() !== ""
    ) {
      showPopup();
    }
  }, [
    a0,
    a1,
    a2,
    a3,
    a4,
    a5,
    b0,
    b1,
    b2,
    b3,
    b4,
    b5,
    c0,
    c1,
    c2,
    c3,
    c4,
    c5,
    d0,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    sub,
  ]);
  const showPopup = useCallback(() => {
    if (isProgress) return;

    setIsProgress(true); // 함수가 실행 중임을 표시
    goInterval();
  }, [isProgress]);

  const goInterval = useCallback(async () => {
    let currentPercent = percent;
    while (currentPercent < 100) {
      await new Promise((resolve) => setTimeout(resolve, 10)); // 10ms 마다 대기
      currentPercent += 1;
      setPercent(currentPercent);
    }

    setTimeout(() => {
      setIsProgress(false); // 함수 실행이 끝났음을 표시
      setPercent(0);
    }, 700);
  }, []);

  // const showPopup = () => {
  //   setIsProgress(true);

  //   const interval = setInterval(() => {
  //     if (percent < 100) {
  //       setPercent((prevPercent) => {
  //         const nextPercent = prevPercent + 1;
  //         return nextPercent <= 100 ? nextPercent : prevPercent;
  //       });
  //     } else {
  //       clearInterval(interval);
  //       setIsProgress(false);
  //     }
  //   }, 20);
  // };

  // useEffect(() => {
  //   if (percent === 100) {
  //     setIsProgress(false);
  //     setPercent(0);
  //   }
  // }, [percent]);

  return (
    <div className="bg-black w-auto h-full text-white">
      {/* <button
        onClick={showPopup}
        className="fixed top-[300px] left-[500px] z-100 bg-white"
      >
        임시실행
      </button> */}
      <Gnb />
      <div className="h-[138px]"></div>
      <div className="w-fit flex gap-[83px] bg-black">
        <Sidebar />
        <div className="w-full h-full">
          <div className="font-bold text-[50px] mb-[10px]">
            Participant’s Baseline in Alzheimer’s Disease
          </div>
          <div className="font-bold text-[30px]">
            Study ID : CPAD | Patient ID : 9QW2U
          </div>
          <div className="flex flex-col mb-[100px]">
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
            <div className="text-[#8057FF] text-[30px] font-bold min-h-[46px] flex items-center">
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
                {Object.entries(a).map(([key, values], index2) => (
                  <div key={key} className="flex cursor-pointer group">
                    <div className="w-[400px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]">
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => {
                        return index === 0 ? (
                          <input
                            className="flex w-[133px] min-h-[46px] items-center justify-center text-center bg-[#80769a] group-hover:bg-[#9a94ae] outline-none"
                            value={getValue("a", index2)}
                            onChange={(e) => {
                              handleChange(e, "a", index2);
                            }}
                            disabled={isProgress}
                            maxLength={1}
                          ></input>
                        ) : (
                          <div
                            key={index}
                            className={`flex w-[133px] min-h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                              (index !== 0 || index !== values.length - 1) &&
                              "border-r border-solid border-black"
                            }`}
                          >
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="pl-[24px]"></div>
              </div>
            </div>
            <div className="text-white min-h-[46px] flex items-center text-[30px]">
              <div className="w-[100px] h-full"></div>
              <div className="w-[400px] pl-[24px] h-full flex items-center">
                ADAS Ideational
              </div>
              <input
                className="flex w-[133px] min-h-[46px] items-center justify-center text-center bg-[#594c80] outline-none"
                value={getValue("sub")}
                onChange={(e) => {
                  handleChange(e, "sub");
                }}
                disabled={isProgress}
                maxLength={1}
              ></input>
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
                {Object.entries(b).map(([key, values], index2) => (
                  <div key={key} className="flex cursor-pointer group">
                    <div className="w-[400px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]">
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => {
                        return index === 0 ? (
                          <input
                            className="flex w-[133px] min-h-[46px] items-center justify-center text-center bg-[#80769a] group-hover:bg-[#9a94ae] outline-none"
                            value={getValue("b", index2)}
                            onChange={(e) => {
                              handleChange(e, "b", index2);
                            }}
                            disabled={isProgress}
                            maxLength={1}
                          ></input>
                        ) : (
                          <div
                            key={index}
                            className={`flex w-[133px] min-h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                              (index !== 0 || index !== values.length - 1) &&
                              "border-r border-solid border-black"
                            }`}
                          >
                            {value}
                          </div>
                        );
                      })}
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
                {Object.entries(c).map(([key, values], index2) => (
                  <div key={key} className="flex cursor-pointer group">
                    <div className="w-[400px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]">
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => {
                        return index === 0 ? (
                          <input
                            className="flex w-[133px] min-h-[46px] items-center justify-center text-center bg-[#80769a] group-hover:bg-[#9a94ae] outline-none"
                            value={getValue("c", index2)}
                            onChange={(e) => {
                              handleChange(e, "c", index2);
                            }}
                            disabled={isProgress}
                            maxLength={1}
                          ></input>
                        ) : (
                          <div
                            key={index}
                            className={`flex w-[133px] min-h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                              (index !== 0 || index !== values.length - 1) &&
                              "border-r border-solid border-black"
                            }`}
                          >
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="pl-[24px]"></div>
              </div>
            </div>
            <div className="flex bg-[#D9D9D94D] w-fit border-b border-solid border-black">
              <div className="pt-[8px] text-[#00FFC2] text-[30px] font-bold w-[100px] border-r border-solid border-black flex justify-center">
                MMSE
              </div>
              <div className="flex flex-col text-[30px]">
                {Object.entries(d).map(([key, values], index2) => (
                  <div key={key} className="flex cursor-pointer group">
                    <div className="w-[400px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]">
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => {
                        return index === 0 ? (
                          <input
                            className="flex w-[133px] min-h-[46px] items-center justify-center text-center bg-[#80769a] group-hover:bg-[#9a94ae] outline-none"
                            value={getValue("d", index2)}
                            onChange={(e) => {
                              handleChange(e, "d", index2);
                            }}
                            disabled={isProgress}
                            maxLength={1}
                          ></input>
                        ) : (
                          <div
                            key={index}
                            className={`flex w-[133px] min-h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                              (index !== 0 || index !== values.length - 1) &&
                              "border-r border-solid border-black"
                            }`}
                          >
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="pl-[24px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isProgress && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[626px] h-[246px] rounded-[50px] bg-opacity-50 bg-black text-[30px] text-white">
          <div className="backdrop-blur-md w-[626px] h-[246px] rounded-[50px] flex flex-col items-center justify-center gap-[25px]">
            <div className="">Optivis is analyzing..</div>
            <div className="w-[503px]">
              <BorderLinearProgress variant="determinate" value={percent} />
            </div>
            <div>{percent}%</div>
          </div>
        </div>
      )}
    </div>
  );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 31,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#6c6c6c",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: `linear-gradient(to right, #3200FF, #9F01FF)`,
  },
}));

export default App;
