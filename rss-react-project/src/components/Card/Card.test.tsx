import { Card } from './Card';
import { render, screen } from '@testing-library/react';

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
  expect(screen.getByText('Character: C-3PO'));
});
