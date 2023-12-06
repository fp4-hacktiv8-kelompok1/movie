import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { TERipple } from 'tw-elements-react';
import { saveActions } from '../hooks/wishSlice';

const cardImageStyle = {
  width: '300px',
  height: '450px',
};

const wishlistButtonStyles = {
  base: 'outline-none flex items-start my-auto',
  blue: 'bg-blue-500',
  transparent: 'bg-transparent',
  autoMargin: 'ml-auto',
};

function Card({ imageUrl, title, type, id, year }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${id}`);
  };
  const data = useSelector((state) => state.wishlist.moviesList);

  const dispatch = useDispatch();
  const saveUnsavedData = () => {
    dispatch(
      saveActions.saveItem({
        imageUrl,
        title,
        type,
        id,
        year,
      })
    );
  };

  const isInWishlist = data.some((item) => item.id === id);

  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 min-h-full">
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat" onClick={handleClick}>
          <img
            className="rounded-t-lg object-cover object-center w-[300px] h-[450px]"
            src={
              imageUrl === 'N/A'
                ? 'https://placehold.co/300x450?text=No+image+available'
                : imageUrl
            }
            alt=""
          />
          <div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 "></div>
          </div>
          <div className="absolute right-2 bottom-2">
            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.9em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
              {year}
            </span>
          </div>
        </div>
      </TERipple>
      <div className="p-6" onClick={handleClick}>
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 cursor-pointer w-44">
          {title}
        </h5>
        <span className="inline-block whitespace-nowrap rounded-full bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 cursor-pointer">
          {type}
        </span>
      </div>
      <button
        onClick={saveUnsavedData}
        className={`${wishlistButtonStyles.base} ${
          isInWishlist ? wishlistButtonStyles.blue : wishlistButtonStyles.transparent
        } ${wishlistButtonStyles.autoMargin}`}
        style={{ marginLeft: 'auto', marginBottom: 0 }}
      >
        <img src="/assests/bookmark.png" className="w-9 h-8" />
      </button>
    </div>
  );
}

export default Card;
