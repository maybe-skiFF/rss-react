import { Card } from './Card';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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

test('the card component renders the relevant card data', () => {
  render(
    <Card cardData={mockData} getDetailedCardData={() => mockData.name} />,
  );
  expect(screen.getByText('Character: C-3PO')).toBeInTheDocument();
});

test('validate that clicking on a card opens a detailed card component', () => {
  const getDetailedCardData = jest.fn().mockImplementation(() => {
    window.history.pushState({}, '', '/people/detailed:C-3PO');
  });
  render(
    <Card cardData={mockData} getDetailedCardData={getDetailedCardData} />,
  );
  const card = screen.getByTestId(mockData.name);
  fireEvent.click(card);
  expect(window.location.pathname).toBe('/people/detailed:C-3PO');
});
