import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="max-w-xl mt-16 sm:mt-24 md:mx-auto sm:text-center lg:max-w-2xl">
          <h1 className="mb-24 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-5xl md:mx-auto">
            This is home page
          </h1>
          <Link
            to="/login"
            className="bg-gray-900 text-white rounded-xl px-6 py-2.5 text-base font-medium hover:bg-gray-700"
          >
            Masuk ke akun
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;