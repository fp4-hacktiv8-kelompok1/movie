// Import necessary dependencies and components from React and third-party libraries.
import React from "react";
import { useNavigate } from "react-router-dom";
import { TERipple } from "tw-elements-react";

// Define a functional component named Card that takes in props.
function Card({ imageUrl, title, type, id, year }) {
  // Access the navigation function from react-router-dom.
  const navigate = useNavigate();

  // Define a click event handler that navigates to a specific route based on the card's id.
  const handleClick = () => {
    navigate(`/${id}`);
  };

  // Return JSX representing a card with an image, title, type, and year.
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 min-h-full">
      {/* Apply a ripple effect to the entire card. */}
      <TERipple>
        {/* Container for the card's image with an overlay, year display, and click event handler. */}
        <div className="relative overflow-hidden bg-cover bg-no-repeat" onClick={handleClick}>
          {/* Display the card's image with a placeholder if not available. */}
          <img
            className="rounded-t-lg object-cover object-center w-[300px] h-[450px]"
            src={imageUrl === "N/A" ? "https://placehold.co/300x450?text=No+image+available" : imageUrl}
            alt=""
          />
          {/* Overlay for the card with a hover effect and opacity transition. */}
          <div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 "></div>
          </div>
          {/* Display the year in the bottom-right corner. */}
          <div className="absolute right-2 bottom-2">
            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.9em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
              {year}
            </span>
          </div>
        </div>
      </TERipple>
      {/* Additional information about the card, such as title and type. */}
      <div className="p-6 flex justify-between">
        <div>
          {/* Display the card's title and type with click event handlers. */}
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

// Export the Card component as the default export.
export default Card;
