import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { FaRegStar } from "react-icons/fa6";

function DetailPage() {
  const { id } = useParams();
  const { loading, error, detail } = useMovieDetail(id);

  return (
    <>
      {loading ? (
        <p className="flex justify-center items-center text-xl font-bold">
          Loading...
        </p>
      ) : (
        <div className="w-full h-full bg-white">
          <div className="container mx-auto my-10">
            <div className="flex flex-col md:flex-row mx-5">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-black">
                <img
                  src={detail.Poster}
                  className="w-full h-full"
                  alt={detail.Title}
                />
              </div>
              <div className="my-5 ml-7">
                <div className="flex flex-col md:flex-row mt-4 md:mt-0 justify-between items-center">
                  <h1 className="font-bold text-2xl md:text-3xl">
                    {detail.Title} ({detail.Year})
                  </h1>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-lg md:text-xl">
                      {detail.imdbRating}
                    </p>
                    <FaRegStar style={{ color: "#f1ff33" }} size={'1.5em'}/>
                  </div>
                </div>
                <div className="flex gap-4 my-3 text-[11px] md:text-sm text-slate-500">
                  <p>{detail.Released}</p>
                  <p>{detail.Country}</p>
                  <p>{detail.Runtime}</p>
                  <p>{detail.Rated}</p>
                </div>
                <p className="">{detail.Plot}</p>
                <div className="mt-5">
                  <div className="flex my-2">
                    <p className="mr-5 text-slate-500">Director</p>
                    <p>{detail.Director}</p>
                  </div>
                  <div className="flex my-2">
                    <p className="mr-8 text-slate-500">Writer</p>
                    <p>{detail.Writer}</p>
                  </div>
                  <div className="flex my-2">
                    <p className="mr-7 text-slate-500">Actors</p>
                    <p>{detail.Actors}</p>
                  </div>
                  <div className="flex my-2">
                    <p className="mr-7 text-slate-500">Genre</p>
                    <p>{detail.Genre}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>{error && "error..."}</div>
    </>
  );
}

export default DetailPage;
