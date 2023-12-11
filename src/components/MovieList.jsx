import React, { useEffect } from "react";
import Card from "./Card";
import Error from "./Error";
import Pagination from "./Pagination";

function MovieList({
  movies,
  error,
  keyword,
  pageNumber,
  onPageChange,
  totalPage,
}) {
  useEffect(() => {}, [pageNumber]);

  const handlePageChange = (page) => {
    onPageChange(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      {!error && (
        <div className="flex justify-center my-8">
          {
            <Pagination
              currentPage={pageNumber}
              totalPage={totalPage}
              onPageChange={handlePageChange}
            />
          }
        </div>
      )}
    </>
  );
}

export default MovieList;
