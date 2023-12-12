import React from "react";
import { Link } from "react-router-dom";

function Error({ errorCode, errorMessage, errorDetail }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Container for error information */}
      <div className="flex flex-col items-center justify-center">
        {/* Display error code */}
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">
          {errorCode}
        </p>
        {/* Display error message */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
          {errorMessage}
        </p>
        {/* Display error detail */}
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          {errorDetail}
        </p>
        {/* Link to navigate back to home */}
        <Link to="/">
          <button
            type="button"
            className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-6"
            data-te-ripple-init
          >
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
