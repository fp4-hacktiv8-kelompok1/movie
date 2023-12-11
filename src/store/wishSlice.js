import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
};

const setItemFunc = (item) => {
  localStorage.setItem("moviesList", JSON.stringify(item));
};

const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    saveItem(state, action) {
      const newData = action.payload;
      const existingData = state.moviesList.find(
        (item) => item.title === newData.title
      );

      if (!existingData) {
        state.moviesList.push({
          title: newData.title,
          imageUrl: newData.imageUrl,
          type: newData.type,
          id: newData.id,
          year: newData.year,
        });
      } else {
        state.moviesList = state.moviesList.filter(
          (item) => item.title !== newData.title
        );
      }

      setItemFunc(state.moviesList.map((item) => item));
    },

  },
});

export const saveActions = wishSlice.actions;
export default wishSlice.reducer;