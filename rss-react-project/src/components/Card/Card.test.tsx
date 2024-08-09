import Card from './Card';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const mockData = {
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

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    pathname: '/',
    rout: '',
    query: { name: 'C-3PO' },
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe('Card tests', () => {
  test('the card component renders the relevant card data', () => {
    render(
      <Provider store={store()}>
        <Card
          cardData={mockData}
          setIsOpenDetailCard={mockSetIsOpenDetailCard}
        />
        , ,
      </Provider>,
    );
    expect(screen.getByText('Character: C-3PO')).toBeInTheDocument();
  });

  test('validate that clicking on a card opens a detailed card component', () => {
    const getDetailedCardData = jest.fn().mockImplementation(() => {
      window.history.pushState({}, '', '/name=C-3PO');
    });
    render(
      <Provider store={store()}>
        <Card cardData={mockData} setIsOpenDetailCard={getDetailedCardData} />,
        ,
      </Provider>,
    );
    const card = screen.getByTestId(mockData.name);
    fireEvent.click(card);
    expect(window.location.pathname).toBe('/name=C-3PO');
  });

  test('should be checked after click checkbox', () => {
    render(
      <Provider store={store()}>
        <Card
          cardData={mockData}
          setIsOpenDetailCard={mockSetIsOpenDetailCard}
        />
        , ,
      </Provider>,
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
