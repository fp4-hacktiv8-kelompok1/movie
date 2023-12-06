import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveActions } from "../hooks/wishSlice";



function WishCard({ imageUrl, title, type, id, year }) {const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/${id}`);
    };

    const dispatch = useDispatch();
  const saveUnsavedData = () => {
    dispatch(
      saveActions.saveItem({
        imageUrl, title, type,id, year
      })
    );
  };

    return (
        
        <div className="mb-10 bg-[#5d73b0] rounded-md">
        <div
      className="block rounded-lg"
      onClick={handleClick}
    >
          <div className="flex p-2.5 pl-4 gap-4">
            <div className="w-42 h-42">
            <img src={imageUrl} className="w-28 h-32"/>
            </div>
            <div className="text-start flex flex-col -gap-1 text-white">
              <h5 className="text-blue-400 font-semibold mb-3 text-2xl">{title}</h5>
              <p className="text-lg">Tipe  : {type}</p>
              <p className="text-lg -mt-3">Rilis : {year}</p>
              <p className="text-lg -mt-3">Id Imdb : {id}</p>
            </div>
          </div>
          </div>
            <button
            onClick={saveUnsavedData}
            className="outline-none bg-transparent flex items-start my-auto"
            style={{ marginLeft: 'auto', marginBottom: 0 }}
            >
            <img src="/assests/bookmark.png" className="w-9 h-8" />
            </button>
        </div>
    )
}


export default WishCard;