import React, { useEffect, useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { PhoneXMarkIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate, useNavigation } from "react-router";
import { MyStopwatch } from "../components/Stopwatch";

function Calling() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCallingText, setShowCallingText] = useState(true);
  const onCallCut = () => {
    navigate("/spinner", {
      state: { spinnerText: "lost connection", showDisconnectedText: true },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setShowCallingText(false);
    }, 3000);
  }, []);

  return (
    <div className="h-full w-full bg-black flex items-center justify-center">
      <div className="bg-white h-[550px] w-[300px] flex flex-col mx-auto items-center pt-10">
        <UserIcon className="h-16 w-16 p-2 text-white bg-blue-400 rounded-full border-2" />
        <p className="text-sm pt-4">Denmark</p>
        <p className="text-3xl pt-4 tracking-wider">{location.state}</p>
        {showCallingText ? (
          <p className="text-gray-400 text-xs pt-4">Calling...</p>
        ) : (
          <MyStopwatch />
        )}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={onCallCut}
        >
          <PhoneXMarkIcon className="absolute bottom-24 w-12 h-12 rounded-full border-2 p-2 bg-red-600 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Calling;
