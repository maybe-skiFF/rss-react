import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPeopleCards } from '../interfaces';

interface IPeopleCardsState {
  cardData: IPeopleCards[];
}

const initialState: IPeopleCardsState = {
  cardData: [],
};

export const peopleCardsSlice = createSlice({
  name: 'peopleCards',
  initialState,
  reducers: {
    peopleCardsFetch: (state, action: PayloadAction<IPeopleCards>) => {
      state.cardData = [action.payload];
    },
  },
});

export const { peopleCardsFetch } = peopleCardsSlice.actions;

export default peopleCardsSlice.reducer;
