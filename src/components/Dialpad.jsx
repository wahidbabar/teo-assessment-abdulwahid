import React from "react";
import DialpadItem from "./DialpadItem";

const array = [
  { item1: "1", item2: "" },
  { item1: "2", item2: "ABC" },
  { item1: "3", item2: "DEF" },
  { item1: "4", item2: "GHI" },
  { item1: "5", item2: "JKL" },
  { item1: "6", item2: "MNO" },
  { item1: "7", item2: "PQRS" },
  { item1: "8", item2: "TUV" },
  { item1: "9", item2: "WXYZ" },
  { item1: "*", item2: "" },
  { item1: "0", item2: "." },
  { item1: "#", item2: "" },
];

function Dialpad() {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 h-[260px] ml-3">
        {array.map((item) => (
          <DialpadItem key={item.item1} item1={item.item1} item2={item.item2} />
        ))}
      </div>
    </>
  );
}

export default Dialpad;
