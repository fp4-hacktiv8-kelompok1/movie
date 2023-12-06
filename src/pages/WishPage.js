import React from "react";
import { useSelector } from "react-redux";
import WishCard from "../components/wishCard";

const WishPage = () => {

  const data = useSelector((state) => state.wishlist.moviesList);
  
  
    return (
      <div className="text-center container-xxl mt-36">
      <div className="text-center text-black">
        <h1 className='font-semibold'>Your Watching List</h1>
      </div>
        <section className="result-section">
          {data.length === 0 ? (
            <h5>Your watchlist is empty...</h5>
          ) : (
            <div>
              <div className="pb-3 text-start">
                <div className="d-flex save-top-section w-full">
                  <p className="result text-center text-white">
                    Result for the movies : <span>{`${data.length}`}</span>
                  </p>
                </div>
                <hr />
              </div>
              {data.map((data) => (
                <WishCard
                  imageUrl={data?.imageUrl}
                  title={data?.title}
                  type={data?.type}
                  year={data?.year}
                  id={data?.id}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  };
  
  export default WishPage;