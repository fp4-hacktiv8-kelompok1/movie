import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleClick = () => {
    if (query === "") {
      return;
    }
    navigate(`/search/${query}`);
    setQuery("");
  };

  return (
    <nav className="relative flex w-full flex-wrap items-center justify-center bg-[#0ea5e9] py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 sm:px-6">
      <div className="w-full flex-1 space-x-4 text-center">
        <Link
          to="/"
          className="ml-2 text-xl text-neutral-800 dark:text-neutral-200 font-bold">
          Movie
        </Link>
      </div>
      
      <div className="w-full sm:w-32 mt-4 sm:mt-0">
        <input
          type="search"
          className="relative block w-full flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
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
      </div>
    </nav>
  );
}

export default Navbar;
