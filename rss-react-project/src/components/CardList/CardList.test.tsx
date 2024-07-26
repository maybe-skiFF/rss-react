import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardList } from './CardList';
import { BrowserRouter } from 'react-router-dom';
// import { getSearchCards } from '../../services/api';
import { useGetSearchCardsQuery } from '../../services/api';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

jest.mock('../../services/api');

const mockPersoneData = {
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

const mockSetIsOpenDetailCard = jest.fn();

const mockData = {
  count: 1,
  next: '',
  previous: '',
  results: [mockPersoneData],
};

const mockDataEmpty = {
  count: 0,
  next: '',
  previous: '',
  results: [],
};

describe('CardList tests', () => {
  test('should verify that the component renders the specified number of cards', async () => {
    (useGetSearchCardsQuery as jest.Mock).mockResolvedValue(
      new Promise(resolve => {
        resolve(mockData);
      }),
    );

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardList
            cardsData={mockData}
            isOpenDetailCard
            setIsOpenDetailCard={mockSetIsOpenDetailCard}
          />
        </BrowserRouter>
        ,
      </Provider>,
    );
    const cards = await screen.findAllByText(/Was born:/);
    expect(cards).toHaveLength(mockData.count);
  });

  test('should display an appropriate message if no cards are present', async () => {
    (useGetSearchCardsQuery as jest.Mock).mockResolvedValue(
      new Promise(resolve => {
        resolve(mockData);
      }),
    );

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardList
            cardsData={mockDataEmpty}
            isOpenDetailCard
            setIsOpenDetailCard={mockSetIsOpenDetailCard}
          />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(
      await screen.findByText('No results were found for your request'),
    ).toBeInTheDocument();
  });
});
