import { IPeopleCards } from 'src/interfaces';
import { BASE_URL } from '../variables/index';
import {
  CombinedState,
  createApi,
  EndpointDefinitions,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { Action, PayloadAction } from '@reduxjs/toolkit/react';
import { RootState } from '../redux/store';

interface IQueryStringParams {
  searchInputValue?: string;
  paginationPageNum?: number;
}

export async function getSearchCards(
  searchValue: string | null,
  pageNum = 1,
): Promise<IPeopleCards> {
  localStorage.setItem('isLoading', 'true');
  try {
    const resp = await fetch(
      `${BASE_URL}/?search=${searchValue}&page=${pageNum}`,
    );
    localStorage.setItem('isLoading', 'false');

    return (await resp.json()) as IPeopleCards;
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  extractRehydrationInfo(
    action,
    { reducerPath },
  ): CombinedState<EndpointDefinitions, never, 'api'> | undefined {
    if (isHydrateAction(action)) return action.payload[reducerPath];
  },
  endpoints: builder => ({
    getSearchCards: builder.query<IPeopleCards, IQueryStringParams>({
      query: args => {
        const { searchInputValue, paginationPageNum = 1 } = args;
        return {
          url: `/?search=${searchInputValue}&page=${paginationPageNum}`,
        };
      },
    }),
  }),
});

export const { useGetSearchCardsQuery } = api;
