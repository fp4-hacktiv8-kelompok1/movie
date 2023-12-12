import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [query, setQuery] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    if (query === "") {
      return;
    }
    navigate(`/search/${query}`);
    setQuery("");
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  return (
    <nav className={`relative flex w-full flex-wrap items-center justify-between bg-[#2F4F4F] py-4 text-white shadow-lg hover:text-white focus:text-white dark:bg-[#2F4F4F] lg:py-4 sm:px-6`}>
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src={"/logomoviee.png"} alt="Logo" className="h-16 w-32 object-cover" />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="search"
          className={`relative block flex-auto rounded border border-solid border-white bg-transparent bg-clip-padding px-2 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(255, 255, 255)] focus:outline-none motion-reduce:transition-none dark:border-white dark:placeholder:text-white dark:focus:border-primary ${inputFocused ? 'text-white' : 'text-white'}`}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={handleSearch}
          value={query}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
