import React, { useState } from "react";
import Dialpad from "../components/Dialpad";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import NumbersDisplay from "../components/NumbersDisplay";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function DialScreen() {
  const navigate = useNavigate();
  const numbers = useSelector((state) => state.dialpad);
  const onDialClick = () => {
    navigate("/calling", { state: numbers });
  };

  return (
    <div className="h-full w-full bg-black flex items-center justify-center">
      <div className="bg-white h-[550px] w-[300px] flex flex-col mx-auto relative">
        <div className="flex items-center justify-center space-x-2 absolute top-1 right-1 p-1">
          <p className="text-[7px]">Ready</p>
          <RocketLaunchIcon className="h-2 w-2" />
        </div>
        <div className="h-[150px] w-full flex items-center justify-center pt-3">
          {/* <NumbersDisplay /> */}
          <NumbersDisplay />
        </div>
        <div className="h-[390px] w-full">
          <Dialpad />
        </div>
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={onDialClick}
        >
          <PhoneArrowUpRightIcon className="absolute bottom-5 w-10 h-10 rounded-full border-2 p-2 bg-[#3EAF6B] text-white" />
        </div>
      </div>
    </div>
  );
}

export default DialScreen;
