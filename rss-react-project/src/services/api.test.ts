import { getSearchCards } from './api';
import { IPeopleCards, IPeopleCard } from '../interfaces';
import fetchMock from 'fetch-mock';

const mockPersoneData: IPeopleCard = {
  name: 'C-3PO',
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

const searchValue = 'C-3PO';
const pageNum = 1;

describe('api tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('should return a response with status 200 and JSON data', async () => {
    fetchMock.getOnce('https://swapi.dev/api/people/?search=C-3PO&page=1', {
      status: 200,
      body: mockResponse,
    });

    const result = await getSearchCards(searchValue, pageNum);

    expect(result).toEqual(mockResponse);
    expect(fetchMock.calls().length).toBe(1);

    const lastCall = fetchMock.calls()[0];
    expect(lastCall[0]).toContain(`?search=${searchValue}&page=${pageNum}`);
  });
});
