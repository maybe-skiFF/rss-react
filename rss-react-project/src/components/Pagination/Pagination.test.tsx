import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';
import { BrowserRouter } from 'react-router-dom';

const mockData = {
  count: 1,
  next: '',
  previous: '',
  results: [],
};

// const mockPaginationButtonHandler = jest.fn();
const mockSetPaginationPageNum = jest.fn();
const mockPaginationButtonHandler = jest.fn().mockImplementation(() => {
  window.history.pushState({}, '', '/people?page=1');
});

describe('Pagination tests', () => {
  test('should make sure the component updates URL query parameter when page changes', () => {
    render(
      <BrowserRouter>
        <Pagination
          cardsData={mockData}
          paginationButtonHandler={mockPaginationButtonHandler}
          searchInputValue={''}
          setPaginationPageNum={mockSetPaginationPageNum}
        />
      </BrowserRouter>,
    );

    const paginationButton = screen.getByText('1');
    expect(paginationButton).toBeInTheDocument();
    fireEvent.click(paginationButton);
    expect(window.location.search).toBe('?page=1');
  });
});
