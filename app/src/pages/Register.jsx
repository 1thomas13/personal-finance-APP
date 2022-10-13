import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="h-screen bg-slate-200 w-screen flex content-center items-center">
      <div className="p-4 max-w-sm w-full m-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8">
        <form className="space-y-6 " action="#">
          <h5 className="text-xl font-medium text-gray-900 ">
            Register in to our platform
          </h5>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@gmail.com"
              required=""
            />
          </div>
          <div>
            <label
              for="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="username"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required=""
            />
          </div>
          <div>
            <label
              for="repeatPassword"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your repeatPassword
            </label>
            <input
              type="text"
              name="repeatPassword"
              id="repeatPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="repeatPassword"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 ">
            You have a account?{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
