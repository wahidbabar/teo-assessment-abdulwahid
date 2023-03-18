import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appendDialValue, removeLastDialVaue } from "../store/dialpadSlice";
import { BackspaceIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

function NumbersDisplay() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numbers = useSelector((state) => state.dialpad);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        // Check if key is a number
        const newNumber = event.key;
        dispatch(appendDialValue(newNumber));
      }
      if (event.keyCode == 8) {
        dispatch(removeLastDialVaue());
      }
      if (event.keyCode == 13) {
        navigate("/calling", { state: numbers });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [numbers]);

  return (
    <div className="w-full flex items-center justify-between p-4 pr-6">
      <p>{numbers}</p>
      <div
        className="cursor-pointer"
        onClick={() => dispatch(removeLastDialVaue())}
      >
        <BackspaceIcon className="h-6 w-6" />
      </div>
    </div>
  );
}

export default NumbersDisplay;
