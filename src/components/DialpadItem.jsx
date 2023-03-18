import React from "react";
import { useDispatch } from "react-redux";
import { appendDialValue } from "../store/dialpadSlice";

function DialpadItem({ item1, item2 }) {
  const dispatch = useDispatch();
  return (
    <div
      className="h-16 w-14 flex flex-col items-center cursor-pointer"
      onClick={() => dispatch(appendDialValue(item1))}
    >
      <h1 className="font-bold text-xl">{item1}</h1>
      <p className="text-xs text-gray-300">{item2}</p>
    </div>
  );
}

export default DialpadItem;
