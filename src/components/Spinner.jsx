import React, { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function Spinner() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state.showDisconnectedText) {
      setTimeout(() => {
        navigate("/dialscreen");
      }, 3000);
    }
  }, []);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="h-full w-full bg-black flex items-center justify-center">
      <div className="bg-white h-[550px] w-[350px] flex flex-col mx-auto justify-center items-center relative">
        {location.state.showDisconnectedText && (
          <button
            className="bg-blue-500 text-white rounded-full p-3 absolute bottom-10"
            onClick={goToHome}
          >
            HOME
          </button>
        )}

        {location.state.showDisconnectedText && (
          <div className="flex items-center justify-center space-x-2 absolute top-1 right-1 p-1">
            <p className="text-[7px] text-red-500">lost connection</p>
            <ExclamationTriangleIcon className="h-2 w-2" />
          </div>
        )}
        <ColorRing
          visible={true}
          height="300"
          width="300"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["000"]}
        />

        <p className="text-red-600 absolute top-50 text-md font-semibold">
          {location.state.spinnerText}
        </p>
      </div>
    </div>
  );
}

export default Spinner;
