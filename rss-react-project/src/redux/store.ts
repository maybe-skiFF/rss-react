import { configureStore } from '@reduxjs/toolkit';
import peopleCardsReducer from './peopleCardsSlice';
import paginationPageReducer from './paginationPageSlice';
import detaildPersoneReducerd from './detaildPersoneSlice';
import { api } from '../services/api';

export const store = configureStore({
  reducer: {
    peopleCards: peopleCardsReducer,
    [api.reducerPath]: api.reducer,
    paginationPage: paginationPageReducer,
    detaildPersone: detaildPersoneReducerd,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
