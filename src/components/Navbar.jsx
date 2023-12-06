import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const data = useSelector((state) => state.wishlist.moviesList);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleClick = () => {
    navigate(`/search/${query}`);
    setQuery("");
  };

  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 sm:px-6">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <Link
          to="/"
          className="ml-2 text-xl text-neutral-800 dark:text-neutral-200"
        >
          Movie
        </Link>
        <Link 
          className="text-gray-400 hover:font-bold text-decoration-none"
          to='/wishlist'>Wishlist ({`${data.length}`})
        </Link>
        <div className="ml-5 flex w-[60%] md:w-[30%]  items-center justify-between">
          <input
            type="search"
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={handleSearch}
            value={query}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          />
          {/*Search icon*/}
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
