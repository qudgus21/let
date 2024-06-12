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
  const [isShowSub, setIsShowSub] = useState(false);
  const [currentSelect, setCurrentSelect] = useState("");

  const [a0, setA0] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");
  const [a8, setA8] = useState("");
  const [a9, setA9] = useState("");
  const [a10, setA10] = useState("");
  const [a11, setA11] = useState("");
  const [a12, setA12] = useState("");

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

  const [sa0, setSa0] = useState(false);
  const [sa1, setSa1] = useState(false);
  const [sa2, setSa2] = useState(false);
  const [sa3, setSa3] = useState(false);
  const [sa4, setSa4] = useState(false);
  const [sa5, setSa5] = useState(false);
  const [sa6, setSa6] = useState(false);
  const [sa7, setSa7] = useState(false);
  const [sa8, setSa8] = useState(false);
  const [sa9, setSa9] = useState(false);
  const [sa10, setSa10] = useState(false);
  const [sa11, setSa11] = useState(false);
  const [sa12, setSa12] = useState(false);

  const [sc0, setSc0] = useState(false);
  const [sc1, setSc1] = useState(false);
  const [sc2, setSc2] = useState(false);
  const [sc3, setSc3] = useState(false);
  const [sc4, setSc4] = useState(false);
  const [sc5, setSc5] = useState(false);

  const [sd0, setSd0] = useState(false);
  const [sd1, setSd1] = useState(false);
  const [sd2, setSd2] = useState(false);
  const [sd3, setSd3] = useState(false);
  const [sd4, setSd4] = useState(false);
  const [sd5, setSd5] = useState(false);
  const [sd6, setSd6] = useState(false);

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
    "ADAS Ideational": [
      "4.0±0.2",
      "3.0±1.2",
      "4.2±0.3",
      "3.2±1.3",
      "3.4±1.3",
      "3.4±1.3",
      "4.2±0.3",
      "3.2±1.2",
      "4.5±0.9",
    ],
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
    "CDR Home Hobbies": [
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
      if (index === 6) return a6;
      if (index === 7) return a7;
      if (index === 8) return a8;
      if (index === 9) return a9;
      if (index === 10) return a10;
      if (index === 11) return a11;
      if (index === 12) return a12;
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
  };

  const handleChange = (e, num, index) => {
    let value = e.target.value;

    if (num === "a") {
      if (index === 0) setA0(value);
      if (index === 1) setA1(value);
      if (index === 2) setA2(value);
      if (index === 3) setA3(value);
      if (index === 4) setA4(value);
      if (index === 5) setA5(value);
      if (index === 6) setA6(value);
      if (index === 7) setA7(value);
      if (index === 8) setA8(value);
      if (index === 9) setA9(value);
      if (index === 10) setA10(value);
      if (index === 11) setA11(value);
      if (index === 12) setA12(value);
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

  // useEffect(() => {
  //   if (
  //     a0.trim() !== "" &&
  //     a1.trim() !== "" &&
  //     a2.trim() !== "" &&
  //     a3.trim() !== "" &&
  //     a4.trim() !== "" &&
  //     a5.trim() !== "" &&
  //     a6.trim() !== "" &&
  //     a7.trim() !== "" &&
  //     a8.trim() !== "" &&
  //     a9.trim() !== "" &&
  //     a10.trim() !== "" &&
  //     a11.trim() !== "" &&
  //     a12.trim() !== "" &&
  //     c0.trim() !== "" &&
  //     c1.trim() !== "" &&
  //     c2.trim() !== "" &&
  //     c3.trim() !== "" &&
  //     c4.trim() !== "" &&
  //     c5.trim() !== "" &&
  //     d0.trim() !== "" &&
  //     d1.trim() !== "" &&
  //     d2.trim() !== "" &&
  //     d3.trim() !== "" &&
  //     d4.trim() !== "" &&
  //     d5.trim() !== "" &&
  //     d6.trim() !== ""
  //   ) {
  //     showPopup();
  //   } else {
  //     setIsShowSub(false);
  //   }
  // }, [
  //   a0,
  //   a1,
  //   a2,
  //   a3,
  //   a4,
  //   a5,
  //   a6,
  //   a7,
  //   a8,
  //   a9,
  //   a10,
  //   a11,
  //   a12,
  //   c0,
  //   c1,
  //   c2,
  //   c3,
  //   c4,
  //   c5,
  //   d0,
  //   d1,
  //   d2,
  //   d3,
  //   d4,
  //   d5,
  //   d6,
  // ]);
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
      setIsProgress(false);
      setPercent(0);
      setIsShowSub(true);
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

  const handleTest = () => {
    setA0("0");
    setA1("0");
    setA2("0");
    setA3("5");
    setA4("1");
    setA5("-");
    setA6("4");
    setA7("0");
    setA8("2");
    setA9("2");
    setA10("1");
    setA11("0");
    setA12("0");

    setC0("-");
    setC1("-");
    setC2("1");
    setC3("1");
    setC4("2");
    setC5("1");

    setD0("1");
    setD1("-");
    setD2("1");
    setD3("3");
    setD4("2");
    setD5("0");
    setD6("3");

    showPopup();
  };

  const handleInputFocus = (num, index) => {
    if (num === "a") {
      if (index === 0) setSa0(true);
      if (index === 1) setSa1(true);
      if (index === 2) setSa2(true);
      if (index === 3) setSa3(true);
      if (index === 4) setSa4(true);
      if (index === 5) setSa5(true);
      if (index === 6) setSa6(true);
      if (index === 7) setSa7(true);
      if (index === 8) setSa8(true);
      if (index === 9) setSa9(true);
      if (index === 10) setSa10(true);
      if (index === 11) setSa11(true);
      if (index === 12) setSa12(true);
    }

    if (num === "c") {
      if (index === 0) setSc0(true);
      if (index === 1) setSc1(true);
      if (index === 2) setSc2(true);
      if (index === 3) setSc3(true);
      if (index === 4) setSc4(true);
      if (index === 5) setSc5(true);
    }

    if (num === "d") {
      if (index === 0) setSd0(true);
      if (index === 1) setSd1(true);
      if (index === 2) setSd2(true);
      if (index === 3) setSd3(true);
      if (index === 4) setSd4(true);
      if (index === 5) setSd5(true);
      if (index === 6) setSd6(true);
    }
  };

  const handleInputBlur = (num, index) => {
    if (num === "a") {
      if (index === 0) setSa0(false);
      if (index === 1) setSa1(false);
      if (index === 2) setSa2(false);
      if (index === 3) setSa3(false);
      if (index === 4) setSa4(false);
      if (index === 5) setSa5(false);
      if (index === 6) setSa6(false);
      if (index === 7) setSa7(false);
      if (index === 8) setSa8(false);
      if (index === 9) setSa9(false);
      if (index === 10) setSa10(false);
      if (index === 11) setSa11(false);
      if (index === 12) setSa12(false);
    }

    if (num === "c") {
      if (index === 0) setSc0(false);
      if (index === 1) setSc1(false);
      if (index === 2) setSc2(false);
      if (index === 3) setSc3(false);
      if (index === 4) setSc4(false);
      if (index === 5) setSc5(false);
    }

    if (num === "d") {
      if (index === 0) setSd0(false);
      if (index === 1) setSd1(false);
      if (index === 2) setSd2(false);
      if (index === 3) setSd3(false);
      if (index === 4) setSd4(false);
      if (index === 5) setSd5(false);
      if (index === 6) setSd6(false);
    }
  };

  const handleSelect = (num, index) => {
    if (num === "a") {
      if (index === 0) setCurrentSelect("a0");
      if (index === 1) setCurrentSelect("a1");
      if (index === 2) setCurrentSelect("a2");
      if (index === 3) setCurrentSelect("a3");
      if (index === 4) setCurrentSelect("a4");
      if (index === 5) setCurrentSelect("a5");
      if (index === 6) setCurrentSelect("a6");
      if (index === 7) setCurrentSelect("a7");
      if (index === 8) setCurrentSelect("a8");
      if (index === 9) setCurrentSelect("a9");
      if (index === 10) setCurrentSelect("a10");
      if (index === 11) setCurrentSelect("a11");
      if (index === 12) setCurrentSelect("a12");
    }

    if (num === "c") {
      if (index === 0) setCurrentSelect("c0");
      if (index === 1) setCurrentSelect("c1");
      if (index === 2) setCurrentSelect("c2");
      if (index === 3) setCurrentSelect("c3");
      if (index === 4) setCurrentSelect("c4");
      if (index === 5) setCurrentSelect("c5");
    }

    if (num === "d") {
      if (index === 0) setCurrentSelect("d0");
      if (index === 1) setCurrentSelect("d1");
      if (index === 2) setCurrentSelect("d2");
      if (index === 3) setCurrentSelect("d3");
      if (index === 4) setCurrentSelect("d4");
      if (index === 5) setCurrentSelect("d5");
      if (index === 6) setCurrentSelect("d6");
    }
  };

  
  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      if (
        a0.trim() !== "" &&
        a1.trim() !== "" &&
        a2.trim() !== "" &&
        a3.trim() !== "" &&
        a4.trim() !== "" &&
        a5.trim() !== "" &&
        a6.trim() !== "" &&
        a7.trim() !== "" &&
        a8.trim() !== "" &&
        a9.trim() !== "" &&
        a10.trim() !== "" &&
        a11.trim() !== "" &&
        a12.trim() !== "" &&
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
        d6.trim() !== ""
      ) {
        showPopup();
      } else {
        setIsShowSub(false);
      }

    }
  }, [
    a0,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
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
  ]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너를 추가합니다.
    window.addEventListener('keydown', handleKeyPress);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="bg-black w-auto h-full text-white !font-poppins">
      {/* <button
        onClick={showPopup}
        className="fixed top-[300px] left-[500px] z-100 bg-white"
      >
        임시실행
      </button> */}
      {/* <button
        onClick={()=>{}}
        className="fixed top-[300px] left-[500px] z-100 bg-white"
      >
        임시실행
      </button> */}
      <Gnb />
      <div className="h-[138px]"></div>
      <div className="flex gap-[83px] bg-black">
        <Sidebar isShowSub={isShowSub} />
        <div className="w-fit h-full bg-black">
          <div className="font-bold text-[50px] mb-[10px] flex justify-between">
            <div className="font-poppins">
              Participant’s Baseline in Alzheimer’s Disease
            </div>
            <div
              onClick={handleTest}
              className="px-[25px] !h-[60px] bg-[#6f6f6f] text-black flex items-center justify-center rounded-[50px] w-[120px] text-[30px] cursor-pointer"
            >
              TEST
            </div>
          </div>
          <div className="font-bold text-[30px]">
            Study ID : CPAD | Patient ID : 9QW2U
          </div>
          <div className="flex flex-col mb-[100px]">
            <div className="bg-[#171717] h-[107px] mt-[20px] flex w-fit">
              <div className="w-[110px] border border-solid border-black flex items-center justify-center"></div>
              <div className="w-[444px]"></div>
              <img
                src={man}
                className="cursor-pointer w-[133px] h-[104px] bg-gray"
                alt="icon"
              />{" "}
              {!isShowSub ? (
                <span className="w-[1064px]"></span>
              ) : (
                <span className="flex">
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
                </span>
              )}
            </div>
            <div className="text-[#8057FF] text-[30px] font-bold min-h-[46px] flex items-center">
              <div className="w-[110px] pl-[24px]"></div>
              <div className="w-[444px] pl-[24px]">Time (months)</div>
              <div className="w-[133px] text-center">Baseline</div>
              {!isShowSub ? (
                <span className="w-[1064px]"></span>
              ) : (
                <span className="flex">
                  <div className="w-[133px] text-center">3</div>
                  <div className="w-[133px] text-center">6</div>
                  <div className="w-[133px] text-center">9</div>
                  <div className="w-[133px] text-center">12</div>
                  <div className="w-[133px] text-center">15</div>
                  <div className="w-[133px] text-center">18</div>
                  <div className="w-[133px] text-center">21</div>
                  <div className="w-[133px] text-center">24</div>
                </span>
              )}
            </div>
            <div className="flex bg-[#D9D9D94D] w-fit">
              <div className="pt-[8px] text-[#00FFC2] text-[30px] font-bold w-[110px] border-r border-solid border-black flex justify-center border-b border-solid border-black">
                ADAS
              </div>
              <div className="flex flex-col text-[30px] border-b border-solid border-black">
                {Object.entries(a).map(([key, values], index2) => (
                  <div
                    key={key}
                    className="flex cursor-pointer group"
                    onClick={() => {
                      handleSelect("a", index2);
                    }}
                  >
                    <div
                      className={`w-[444px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]
                    ${
                      index2 === 0 &&
                      currentSelect !== "a0" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 1 &&
                      currentSelect !== "a1" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 2 &&
                      currentSelect !== "a2" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 3 &&
                      currentSelect !== "a3" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 4 &&
                      currentSelect !== "a4" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 5 &&
                      currentSelect !== "a5" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 6 &&
                      currentSelect !== "a6" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 7 &&
                      currentSelect !== "a7" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 8 &&
                      currentSelect !== "a8" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 9 &&
                      currentSelect !== "a9" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 10 &&
                      currentSelect !== "a10" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 11 &&
                      currentSelect !== "a11" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 12 &&
                      currentSelect !== "a12" &&
                      "group-hover:black"
                    }
                    ${
                      index2 === 0 && currentSelect === "a0"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 1 && currentSelect === "a1"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 2 && currentSelect === "a2"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 3 && currentSelect === "a3"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 4 && currentSelect === "a4"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 5 && currentSelect === "a5"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 6 && currentSelect === "a6"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 7 && currentSelect === "a7"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 8 && currentSelect === "a8"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 9 && currentSelect === "a9"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 10 && currentSelect === "a10"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 11 && currentSelect === "a11"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    ${
                      index2 === 12 && currentSelect === "a12"
                        ? "!bg-black"
                        : "bg-[D9D9D94D]"
                    }
                    `}
                    >
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => {
                        return index === 0 ? (
                          <input
                            className={`flex w-[133px] min-h-[46px] items-center justify-center text-center outline-none group-hover:bg-[#9a94ae]
                            ${
                              index2 === 0 &&
                              currentSelect === "a0" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 1 &&
                              currentSelect === "a1" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 2 &&
                              currentSelect === "a2" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 3 &&
                              currentSelect === "a3" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 4 &&
                              currentSelect === "a4" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 5 &&
                              currentSelect === "a5" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 6 &&
                              currentSelect === "a6" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 7 &&
                              currentSelect === "a7" &&
                              "group-hover:bg-[#594c80]"
                            },
                            ${
                              index2 === 8 &&
                              currentSelect === "a8" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 9 &&
                              currentSelect === "a9" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 10 &&
                              currentSelect === "a10" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 11 &&
                              currentSelect === "a11" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 12 &&
                              currentSelect === "a12" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 0 && currentSelect === "a0"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 1 && currentSelect === "a1"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 2 && currentSelect === "a2"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 3 && currentSelect === "a3"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 4 && currentSelect === "a4"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 5 && currentSelect === "a5"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 6 && currentSelect === "a6"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 7 && currentSelect === "a7"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 8 && currentSelect === "a8"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 9 && currentSelect === "a9"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 10 && currentSelect === "a10"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 11 && currentSelect === "a11"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 12 && currentSelect === "a12"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            `}
                            value={getValue("a", index2)}
                            onChange={(e) => {
                              handleChange(e, "a", index2);
                            }}
                            disabled={isProgress}
                            maxLength={1}
                            onFocus={() => {
                              handleInputFocus("a", index2);
                            }}
                            onBlur={() => {
                              handleInputBlur("a", index2);
                            }}
                          ></input>
                        ) : !isShowSub ? (
                          <span className={`w-[133px] group-hover:bg-[#6f6f6f]
                          ${
                            index2 === 0 &&
                            currentSelect !== "a0" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 1 &&
                            currentSelect !== "a1" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 2 &&
                            currentSelect !== "a2" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 3 &&
                            currentSelect !== "a3" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 4 &&
                            currentSelect !== "a4" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 5 &&
                            currentSelect !== "a5" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 6 &&
                            currentSelect !== "a6" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 7 &&
                            currentSelect !== "a7" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 8 &&
                            currentSelect !== "a8" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 9 &&
                            currentSelect !== "a9" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 10 &&
                            currentSelect !== "a10" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 11 &&
                            currentSelect !== "a11" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 12 &&
                            currentSelect !== "a12" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 0 && currentSelect === "a0"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 1 && currentSelect === "a1"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 2 && currentSelect === "a2"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 3 && currentSelect === "a3"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 4 && currentSelect === "a4"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 5 && currentSelect === "a5"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 6 && currentSelect === "a6"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 7 && currentSelect === "a7"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 8 && currentSelect === "a8"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 9 && currentSelect === "a9"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 10 && currentSelect === "a10"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 11 && currentSelect === "a11"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 12 && currentSelect === "a12"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          `}></span>
                        ) : (
                          <div
                            key={index}
                            className={`here3 flex w-[133px] min-h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                              (index !== 0 || index !== values.length - 1) &&
                              "border-r border-solid border-black"
                            }
                            ${
                              index2 === 0 &&
                              currentSelect !== "a0" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 1 &&
                              currentSelect !== "a1" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 2 &&
                              currentSelect !== "a2" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 3 &&
                              currentSelect !== "a3" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 4 &&
                              currentSelect !== "a4" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 5 &&
                              currentSelect !== "a5" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 6 &&
                              currentSelect !== "a6" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 7 &&
                              currentSelect !== "a7" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 8 &&
                              currentSelect !== "a8" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 9 &&
                              currentSelect !== "a9" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 10 &&
                              currentSelect !== "a10" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 11 &&
                              currentSelect !== "a11" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 12 &&
                              currentSelect !== "a12" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 0 && currentSelect === "a0"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 1 && currentSelect === "a1"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 2 && currentSelect === "a2"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 3 && currentSelect === "a3"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 4 && currentSelect === "a4"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 5 && currentSelect === "a5"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 6 && currentSelect === "a6"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 7 && currentSelect === "a7"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 8 && currentSelect === "a8"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 9 && currentSelect === "a9"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 10 && currentSelect === "a10"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 11 && currentSelect === "a11"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 12 && currentSelect === "a12"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                          `}
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
              <div className="pt-[8px] text-[#00FFC2] text-[30px] font-bold w-[110px] border-r border-solid border-black flex justify-center">
                CDR
              </div>
              <div className="flex flex-col text-[30px]">
                {Object.entries(c).map(([key, values], index2) => (
                  <div
                    key={key}
                    className="flex cursor-pointer group"
                    onClick={() => {
                      handleSelect("c", index2);
                    }}
                  >
                    <div
                      className={`w-[444px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]
                      ${
                        index2 === 0 &&
                        currentSelect !== "c0" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 1 &&
                        currentSelect !== "c1" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 2 &&
                        currentSelect !== "c2" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 3 &&
                        currentSelect !== "c3" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 4 &&
                        currentSelect !== "c4" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 5 &&
                        currentSelect !== "c5" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 0 && currentSelect === "c0"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 1 && currentSelect === "c1"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 2 && currentSelect === "c2"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 3 && currentSelect === "c3"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 4 && currentSelect === "c4"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 5 && currentSelect === "c5"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                    `}
                    >
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => {
                        return index === 0 ? (
                          <input
                            className={`flex w-[133px] min-h-[46px] items-center justify-center text-center outline-none group-hover:bg-[#9a94ae]
                            ${
                              index2 === 0 &&
                              currentSelect === "c0" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 1 &&
                              currentSelect === "c1" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 2 &&
                              currentSelect === "c2" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 3 &&
                              currentSelect === "c3" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 4 &&
                              currentSelect === "c4" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 5 &&
                              currentSelect === "c5" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 0 && currentSelect === "c0"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 1 && currentSelect === "c1"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 2 && currentSelect === "c2"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 3 && currentSelect === "c3"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 4 && currentSelect === "c4"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 5 && currentSelect === "c5"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            `}
                            value={getValue("c", index2)}
                            onChange={(e) => {
                              handleChange(e, "c", index2);
                            }}
                            disabled={isProgress}
                            maxLength={1}
                            onFocus={() => {
                              handleInputFocus("c", index2);
                            }}
                            onBlur={() => {
                              handleInputBlur("c", index2);
                            }}
                          ></input>
                        ) : !isShowSub ? (
                          <span className={`w-[133px] group-hover:bg-[#6f6f6f]
                          ${
                            index2 === 0 &&
                            currentSelect !== "c0" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 1 &&
                            currentSelect !== "c1" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 2 &&
                            currentSelect !== "c2" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 3 &&
                            currentSelect !== "c3" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 4 &&
                            currentSelect !== "c4" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 5 &&
                            currentSelect !== "c5" &&
                            "group-hover:black"
                          }
                          ${
                            index2 === 0 && currentSelect === "c0"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 1 && currentSelect === "c1"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 2 && currentSelect === "c2"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 3 && currentSelect === "c3"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 4 && currentSelect === "c4"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          ${
                            index2 === 5 && currentSelect === "c5"
                              ? "!bg-black"
                              : "bg-[D9D9D94D]"
                          }
                          `}></span>
                        ) : (
                          <div
                            key={index}
                            className={`flex w-[133px] min-h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                              (index !== 0 || index !== values.length - 1) &&
                              "border-r border-solid border-black"
                            }
                            ${
                              index2 === 0 &&
                              currentSelect !== "c0" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 1 &&
                              currentSelect !== "c1" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 2 &&
                              currentSelect !== "c2" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 3 &&
                              currentSelect !== "c3" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 4 &&
                              currentSelect !== "c4" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 5 &&
                              currentSelect !== "c5" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 0 && currentSelect === "c0"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 1 && currentSelect === "c1"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 2 && currentSelect === "c2"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 3 && currentSelect === "c3"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 4 && currentSelect === "c4"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 5 && currentSelect === "c5"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                        `}
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
              <div className="pt-[8px] text-[#00FFC2] text-[30px] font-bold w-[110px] border-r border-solid border-black flex justify-center">
                MMSE
              </div>
              <div className="flex flex-col text-[30px]">
                {Object.entries(d).map(([key, values], index2) => (
                  <div
                    key={key}
                    className="flex cursor-pointer group"
                    onClick={() => {
                      handleSelect("d", index2);
                    }}
                  >
                    <div
                      className={`w-[444px] pl-[24px] flex items-center group-hover:bg-[#6f6f6f]
                      ${
                        index2 === 0 &&
                        currentSelect !== "d0" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 1 &&
                        currentSelect !== "d1" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 2 &&
                        currentSelect !== "d2" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 3 &&
                        currentSelect !== "d3" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 4 &&
                        currentSelect !== "d4" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 5 &&
                        currentSelect !== "d5" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 6 &&
                        currentSelect !== "d6" &&
                        "group-hover:black"
                      }
                      ${
                        index2 === 0 && currentSelect === "d0"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 1 && currentSelect === "d1"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 2 && currentSelect === "d2"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 3 && currentSelect === "d3"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 4 && currentSelect === "d4"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 5 && currentSelect === "d5"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                      ${
                        index2 === 6 && currentSelect === "d6"
                          ? "!bg-black"
                          : "bg-[D9D9D94D]"
                      }
                    `}
                    >
                      {key}
                    </div>
                    <div className="flex">
                      {values.map((value, index) => {
                        return index === 0 ? (
                          <input
                            className={`flex w-[133px] min-h-[46px] items-center justify-center text-center outline-none group-hover:bg-[#9a94ae]
                            ${
                              index2 === 0 &&
                              currentSelect === "d0" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 1 &&
                              currentSelect === "d1" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 2 &&
                              currentSelect === "d2" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 3 &&
                              currentSelect === "d3" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 4 &&
                              currentSelect === "d4" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 5 &&
                              currentSelect === "d5" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 6 &&
                              currentSelect === "d6" &&
                              "group-hover:bg-[#594c80]"
                            }
                            ${
                              index2 === 0 && currentSelect === "d0"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 1 && currentSelect === "d1"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 2 && currentSelect === "d2"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 3 && currentSelect === "d3"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 4 && currentSelect === "d4"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 5 && currentSelect === "d5"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }
                            ${
                              index2 === 6 && currentSelect === "d6"
                                ? "!bg-[#594c80]"
                                : "bg-[#80769a]"
                            }

                            `}
                            value={getValue("d", index2)}
                            onChange={(e) => {
                              handleChange(e, "d", index2);
                            }}
                            disabled={isProgress}
                            maxLength={1}
                            onFocus={() => {
                              handleInputFocus("d", index2);
                            }}
                            onBlur={() => {
                              handleInputBlur("d", index2);
                            }}
                          ></input>
                        ) : !isShowSub ? (
                          <span className="w-[133px]"></span>
                        ) : (
                          <div
                            key={index}
                            className={`flex w-[133px] min-h-[46px] justify-center items-center group-hover:bg-[#6f6f6f] ${
                              (index !== 0 || index !== values.length - 1) &&
                              "border-r border-solid border-black"
                            }
                            ${
                              index2 === 0 &&
                              currentSelect !== "d0" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 1 &&
                              currentSelect !== "d1" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 2 &&
                              currentSelect !== "d2" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 3 &&
                              currentSelect !== "d3" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 4 &&
                              currentSelect !== "d4" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 5 &&
                              currentSelect !== "d5" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 6 &&
                              currentSelect !== "d6" &&
                              "group-hover:black"
                            }
                            ${
                              index2 === 0 && currentSelect === "d0"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 1 && currentSelect === "d1"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 2 && currentSelect === "d2"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 3 && currentSelect === "d3"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 4 && currentSelect === "d4"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 5 && currentSelect === "d5"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            ${
                              index2 === 6 && currentSelect === "d6"
                                ? "!bg-black"
                                : "bg-[D9D9D94D]"
                            }
                            `}
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
          <div className="backdrop-blur-md w-[626px] h-[246px] rounded-[50px] flex flex-col items-center justify-center gap-[25px] border border-solid border-white">
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
