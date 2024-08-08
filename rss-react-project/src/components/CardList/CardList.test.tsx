import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from './CardList';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

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
    render(
      <Provider store={store}>
        <CardList
          cardsData={mockData}
          isOpenDetailCard
          setIsOpenDetailCard={mockSetIsOpenDetailCard}
        />
        ,
      </Provider>,
    );
    const cards = await screen.findByText(/Was born:/);
    expect(cards).toBeInTheDocument();
  });

  test('should display an appropriate message if no cards are present', async () => {
    render(
      <CardList
        cardsData={mockDataEmpty}
        isOpenDetailCard
        setIsOpenDetailCard={mockSetIsOpenDetailCard}
      />,
    );

    expect(
      await screen.findByText('No results were found for your request'),
    ).toBeInTheDocument();
  });
});
