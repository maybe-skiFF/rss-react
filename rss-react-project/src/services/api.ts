import { IPeopleCards } from 'src/interfaces';
import { BASE_URL } from '../variables/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
