import React from "react";
import { useNavigate } from "react-router-dom";
import { TERipple } from "tw-elements-react";

function Card({ imageUrl, title, type, id, year }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate (`/${id}`);
  };

  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 min-h-full">
      <TERipple>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          onClick={handleClick}
        >
          <img
            className="rounded-t-lg object-cover object-center w-[300px] h-[450px]"
            src={
              imageUrl === "N/A"
                ? "https://placehold.co/300x450?text=No+image+available"
                : imageUrl
            }
            alt=""
          />
          <div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 "></div>
          </div>
          <div className="absolute right-2 bottom-2">
            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.9em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
              {year}
            </span>
          </div>
        </div>
      </TERipple>
      <div className="p-6  flex justify-between">
        <div>
          {" "}
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 cursor-pointer w-44 "
            onClick={handleClick}
          >
            {title}
          </h5>
          <span className="inline-block whitespace-nowrap rounded-full bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 cursor-pointer">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
