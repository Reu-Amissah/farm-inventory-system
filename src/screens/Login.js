import "../App.css";
import React from "react";
import bg_img from "../assets/bg_img.jpg";

export default function Login() {
  return (
    <div>
      <div>
        <div>
          <h3>Welcome back</h3>
          <p>Welcome! Please enter your login details</p>
          <div>
            <p>Email</p>
            <input placeholder="Enter your email"></input>
          </div>
          <div>
            <p>Password</p>
            <input placeholder="********"></input>
          </div>
          <div>
            <input type="checkbox"></input> Remember me
            <p>Forgot password</p>
          </div>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm w-full py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Sign In
          </button>
          <button className="focus:outline-none text-green-700 bg-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm w-full py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Sign in with Google
          </button>

          <p>
            Don't have an account?<p>Sign up for free</p>
          </p>
        </div>
        <div>
          <img src={bg_img} alt="bg_img"></img>
        </div>
      </div>
    </div>
  );
}

// export default Login;
