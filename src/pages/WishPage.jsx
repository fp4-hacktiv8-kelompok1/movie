import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const WishPage = () => {
  const data = useSelector((state) => state.wishlist.moviesList);

  return (
    <>
      <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 mt-6 place-items-center">
        {data.map((data) => (
          <Card
            key={data.id}
            imageUrl={data?.imageUrl}
            title={data?.title}
            type={data?.type}
            year={data?.year}
            id={data?.id}
          />
        ))}
      </div>
      {data.length === 0 && (
        <div className="flex justify-center items-center">
          <h1 className="text-xl font-bold mt-12">Wishlist kosong</h1>
        </div>
      )}
    </>
  );
};

export default WishPage;
