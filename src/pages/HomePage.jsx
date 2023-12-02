import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useMovieSearch from "../hooks/useMovieSearch";
import Skeleton from "../components/Skeleton";

function HomePage() {
  const [query, setQuery] = useState("spider man");
  const [pageNumber, setPageNumber] = useState(1);
  const { movies, loading, error } = useMovieSearch(query, pageNumber);

  useEffect(() => {}, [pageNumber]);
  return (
    <>
      <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 mt-6 place-items-center">
        {movies.map((movie) => (
          <Card
            key={movie.imdbID}
            id={movie.imdbID}
            imageUrl={movie.Poster}
            title={movie.Title}
            type={movie.Type}
            year={movie.Year}
          />
        ))}
        {loading && <Skeleton />}
      </div>

      <div>{error && "error..."}</div>
    </>
  );
}

export default HomePage;
