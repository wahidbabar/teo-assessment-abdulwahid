import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-5">
      <h1 className="text-6xl">Teleforce</h1>
      <p className="text-2xl">
        Inspiration for design with limited functionality
      </p>
    </div>
  );
}

export default Splash;
