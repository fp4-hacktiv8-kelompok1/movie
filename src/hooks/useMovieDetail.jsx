import axios from "axios";
import { useEffect, useState } from "react";

function useMovieDetail(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://www.omdbapi.com/",
      params: {
        apikey: "fd8de445",
        i: id,
      },
    })
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [id]);

  return { loading, error, detail };
}

export default useMovieDetail;
