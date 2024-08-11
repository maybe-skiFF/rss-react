import { configureStore } from '@reduxjs/toolkit';
import favoritePeopleReducer from './favoritePeopleSlice';
import paginationPageReducer from './paginationPageSlice';
import detaildPersoneReducerd from './detaildPersoneSlice';
import searchInputValueReducer from './searchInputValueSlice';
import { api } from '../services/api';
import { createWrapper } from 'next-redux-wrapper';

export const store = () =>
  configureStore({
    reducer: {
      favoritePeople: favoritePeopleReducer,
      [api.reducerPath]: api.reducer,
      paginationPage: paginationPageReducer,
      detaildPersone: detaildPersoneReducerd,
      searchInputValue: searchInputValueReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(store);
