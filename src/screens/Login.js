import "../App.css";
import React from "react";
import bg_img from "../assets/bg_img.jpg";

export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-950">
      {/* <div className="content w-11/12 mx-auto bg-white rounded-md"> */}
      <div className="w-11/12 mx-auto h-5/6 bg-white rounded-md flex items-center justify-center space-x-4">
        <div className="w-1/2 px-40 space-y-4">
          <h3 className="text-3xl font-semibold font-sans">Welcome back</h3>
          <p className="text-sm font-normal font-sans text-slate-400">
            Welcome! Please enter your login details
          </p>
          <div className="space-y-1">
            <p className="text-xs font-semibold font-sans">Email</p>
            <input
              className="text-sm font-normal font-sans text-slate-400 p-2 w-full border border-slate-200 rounded-md"
              type="text"
              placeholder="Enter your email"
            ></input>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold font-sans">Password</p>
            <input
              className="text-sm font-normal font-sans text-slate-400 p-2 w-full border border-slate-200 rounded-md"
              type="password"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="flex align-center justify-between">
            <div className="flex space-x-2">
              <input
                className="text-xs font-semibold font-sans"
                type="checkbox"
              ></input>
              <p className="text-xs font-semibold font-sans">Remember me</p>
            </div>
            <p className="text-xs font-semibold font-sans justify-self-end">
              Forgot password
            </p>
          </div>
          <button className="transition ease-in-out duration-150 focus:outline-none text-white bg-lime-700 hover:bg-lime-800  font-medium rounded-md text-sm w-full py-2.5 mr-2 mb-2 border-transparent">
            Sign In
          </button>
          <button className="transition ease-in-out duration-150 focus:outline-none text-lime-700 bg-white hover:bg-slate-100 hover:text-lime-700 font-medium rounded-md text-sm w-full py-2.5 mr-2 mb-2 border border-lime-200">
            Sign in with Google
          </button>

          <p className="flex align-center justify-center text-xs font-normal font-sans text-slate-400">
            Don't have an account?
            <p className="transition ease-in-out duration-150 font-semibold text-slate-900 cursor-pointer hover:text-slate-700 hover:underline hover:underline-offset-4 pl-1">
              Sign up for free
            </p>
          </p>
        </div>
        <div className="w-1/2 h-full">
          <img
            className="rounded-md object-cover h-full hidden sm:block"
            src={bg_img}
            alt="bg_img"
          ></img>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

// export default Login;
