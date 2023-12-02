import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";

function DetailPage() {
  const { id } = useParams();
  const { loading, error, detail } = useMovieDetail(id);

  return (
    <>
      <div>{detail.Title}</div>
      <div>{loading && "loading..."}</div>
      <div>{error && "error..."}</div>
    </>
  );
}

export default DetailPage;
