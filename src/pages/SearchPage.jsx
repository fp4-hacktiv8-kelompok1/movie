import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieSearch from "../hooks/useMovieSearch";
import Card from "../components/Card";

function SearchPage() {
  const { keyword } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { movies, loading, error, hasMore } = useMovieSearch(
    keyword,
    pageNumber
  );

  useEffect(() => {}, [keyword]);
  return (
    <>
      <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 mt-6 place-items-center">
        {movies.map((movie) => (
          <Card
            key={movie.imdbID}
            imageUrl={movie.Poster}
            title={movie.Title}
            type={movie.Type}
          />
        ))}
      </div>
      <div>{loading && "loading..."}</div>
      <div>{error && "error..."}</div>
    </>
  );
}

export default SearchPage;
