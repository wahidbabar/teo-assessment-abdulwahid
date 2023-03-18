import React, { useState } from "react";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.username.value);

    navigate("/spinner", {
      state: { spinnerText: "Connecting...", showDisconnectedText: false },
    });
  };

  return (
    <div className="h-full w-full bg-black flex items-center justify-center">
      <div className="bg-white h-[550px] w-[350px] flex flex-col mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="h-15 w-20 mx-auto mt-14">
            <img
              src="https://www.teo-intl.com/wp-content/uploads/2020/10/Teo_logo.png"
              alt="Logo"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col pl-8 pr-8 space-y-3 mt-10">
            <label htmlFor="username" className="text-sm text-gray-600">
              Username
            </label>
            <div className="flex border-b pb-2 items-center space-x-3">
              <UserIcon className="w-4 h-4" />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Type you username"
              />
            </div>
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <div className="flex border-b pb-2 items-center space-x-3">
              <LockClosedIcon className="w-4 h-4" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type you password"
              />
            </div>
            <div className="flex justify-end">
              <p className="text-xs text-gray-400 mb-2">Forgot password?</p>
            </div>
            <button
              type="submit"
              className="rounded-3xl py-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-[#A884EA] to-[#DC4AF3]"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
//placeholder="&#61447;"
export default Login;
