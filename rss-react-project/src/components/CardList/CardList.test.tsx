import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardList } from './CardList';
import { BrowserRouter } from 'react-router-dom';
import { getSearchCards } from '../../services/api';

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

const mockSetCardsData = jest.fn();
const mockSetIsOpenDetailCard = jest.fn();
const mockGetDetailedCardData = jest.fn();

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
    (getSearchCards as jest.Mock).mockResolvedValue(
      new Promise(resolve => {
        resolve(mockData);
      }),
    );

    render(
      <BrowserRouter>
        <CardList
          cardsData={mockData}
          setCardsData={mockSetCardsData}
          getDetailedCardData={mockGetDetailedCardData}
          isOpenDetailCard
          setIsOpenDetailCard={mockSetIsOpenDetailCard}
        />
      </BrowserRouter>,
    );
    const cards = await screen.findAllByText(/Was born:/);
    expect(cards).toHaveLength(mockData.count);
  });

  test('should display an appropriate message if no cards are present', async () => {
    (getSearchCards as jest.Mock).mockResolvedValue(
      new Promise(resolve => {
        resolve(mockData);
      }),
    );

    render(
      <BrowserRouter>
        <CardList
          cardsData={mockDataEmpty}
          setCardsData={() => mockSetCardsData}
          getDetailedCardData={mockGetDetailedCardData}
          isOpenDetailCard
          setIsOpenDetailCard={mockSetIsOpenDetailCard}
        />
      </BrowserRouter>,
    );

    expect(
      await screen.findByText('No results were found for your request'),
    ).toBeInTheDocument();
  });
});
