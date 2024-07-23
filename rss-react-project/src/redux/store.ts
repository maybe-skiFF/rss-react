import { configureStore } from '@reduxjs/toolkit';
import peopleCardsReducer from './peopleCardsSlice';

export const store = configureStore({
  reducer: {
    peopleCards: peopleCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
