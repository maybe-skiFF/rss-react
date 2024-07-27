import { getSearchCards } from './api';
import { IPeopleCards, IPeopleCard } from '../interfaces';
import fetchMock from 'fetch-mock';

const mockPersoneData: IPeopleCard = {
  name: 'Chewbacca',
  birth_year: '112BBY',
  mass: '75',
  height: '167',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
  url: '',
};

const mockResponse: IPeopleCards = {
  results: [mockPersoneData],
  count: 0,
  next: '',
  previous: '',
};

const searchInputValue = 'Chewbacca';
const paginationPageNum = 1;

describe('api tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('should return a response with status 200 and JSON data', async () => {
    fetchMock.getOnce('https://swapi.dev/api/people/?search=Chewbacca&page=1', {
      status: 200,
      body: mockResponse,
    });

    const result = await getSearchCards(searchInputValue, paginationPageNum);

    expect(result).toEqual(mockResponse);
    expect(fetchMock.calls().length).toBe(1);

    const lastCall = fetchMock.calls()[0];
    expect(lastCall[0]).toContain(
      `?search=${searchInputValue}&page=${paginationPageNum}`,
    );
  });
});
