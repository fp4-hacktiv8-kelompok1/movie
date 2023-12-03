import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieSearch from "../hooks/useMovieSearch";
import MovieList from "../components/MovieList";

function SearchPage() {
  const { keyword } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { movies, loading, error, totalPage } = useMovieSearch(
    keyword,
    pageNumber
  );

  useEffect(() => {
    setPageNumber(1);
  }, [keyword]);

  return (
    <MovieList
      movies={movies}
      loading={loading}
      error={error}
      keyword={keyword}
      pageNumber={pageNumber}
      onPageChange={setPageNumber}
      totalPage={totalPage}
    />
  );
}

export default SearchPage;
