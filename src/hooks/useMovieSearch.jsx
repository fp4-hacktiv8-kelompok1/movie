import axios from "axios";
import { useEffect, useState } from "react";

function useMovieSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://www.omdbapi.com/",
      params: {
        apikey: "fd8de445",
        s: query,
        page: pageNumber,
      },
    })
      .then((res) => {
        if (res.data.Search && Array.isArray(res.data.Search)) {
          setMovies((prevMovies) => {
            return [...new Set([...prevMovies, ...res.data.Search])];
          });
          setHasMore(
            res.data.Response === "True" && res.data.Search.length > 0
          );
          setLoading(false);
          console.log(res.data.Search);
        } else {
          // Handle the case where res.data.Search is not an array
          setError(true);
        }
      })
      .catch((e) => {
        setError(true);
      });
  }, [query, pageNumber]);

  return { loading, error, movies, hasMore };
}

export default useMovieSearch;
