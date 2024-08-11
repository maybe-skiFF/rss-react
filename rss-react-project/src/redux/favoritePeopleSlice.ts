import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavoritePeopleCard } from '../interfaces';

interface IFavoritePeopleState {
  favoritePeople: IFavoritePeopleCard[];
}

const initialState: IFavoritePeopleState = {
  favoritePeople: [],
};

export const favoritePeopleSlice = createSlice({
  name: 'favoritePeople',
  initialState,
  reducers: {
    setFavoritePeople: (state, action: PayloadAction<IFavoritePeopleCard>) => {
      state.favoritePeople = [...state.favoritePeople, action.payload];
    },
    removeFavoritePeople: (
      state,
      action: PayloadAction<IFavoritePeopleCard>,
    ) => {
      state.favoritePeople = state.favoritePeople.filter(
        item => item.name !== action.payload.name,
      );
    },
    clearFavoritePeople: (state, action: PayloadAction<[]>) => {
      state.favoritePeople = action.payload;
    },
  },
});

export const { setFavoritePeople, removeFavoritePeople, clearFavoritePeople } =
  favoritePeopleSlice.actions;

export default favoritePeopleSlice.reducer;
