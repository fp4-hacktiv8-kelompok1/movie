import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieSearch from "../hooks/useMovieSearch";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import Error from "../components/Error";

function SearchPage() {
  const { keyword } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { movies, loading, error } = useMovieSearch(keyword, pageNumber);

  useEffect(() => {}, [keyword]);
  return (
    <>
      <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 mt-6 place-items-center">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              key={movie.imdbID}
              id={movie.imdbID}
              imageUrl={movie.Poster}
              title={movie.Title}
              type={movie.Type}
              year={movie.Year}
            />
          ))
        ) : loading ? (
          <Skeleton />
        ) : null}
      </div>
      <div>
        {error && (
          <Error
            errorCode={404}
            errorMessage={"Movie not found"}
            errorDetail={`Movie "${keyword}" not found`}
          />
        )}
      </div>
    </>
  );
}

export default SearchPage;
