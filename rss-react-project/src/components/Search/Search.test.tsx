import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Search } from './Search';

const mockSetInputValue = jest.fn();
const mockSearchButtonHandler = jest.fn();

describe('Search tests', () => {
  test('should verify that clicking the Search button saves the entered value to the local storage', () => {
    render(
      <BrowserRouter>
        <Search
          searchInputValue={'C-3PO'}
          setInputValue={mockSetInputValue}
          searchButtonHandler={mockSearchButtonHandler}
          paginationPageNum={1}
        />
      </BrowserRouter>,
    );

    const searchInput = screen.getByPlaceholderText('search...');
    const searchButton = screen.getByTestId('searchButton');
    fireEvent.change(searchInput, { target: { value: 'C-3PO' } });
    fireEvent.click(searchButton);
    expect(searchButton).toBeInTheDocument();
    expect(window.localStorage.getItem('searchInputValue')).toBe('C-3PO');
  });

  test('should check that the component retrieves the value from the local storage upon mounting', () => {
    window.localStorage.setItem('searchInputValue', 'C-3PO');
    render(
      <BrowserRouter>
        <Search
          searchInputValue={'C-3PO'}
          setInputValue={mockSetInputValue}
          searchButtonHandler={mockSearchButtonHandler}
          paginationPageNum={1}
        />
      </BrowserRouter>,
    );

    expect(screen.getByDisplayValue('C-3PO')).toBeInTheDocument();
  });

  test('should navigate to page=1 if searchInput is empty', () => {
    render(
      <BrowserRouter>
        <Search
          searchInputValue={''}
          setInputValue={mockSetInputValue}
          searchButtonHandler={mockSearchButtonHandler}
          paginationPageNum={1}
        />
      </BrowserRouter>,
    );

    const searchInput = screen.getByPlaceholderText('search...');
    const searchButton = screen.getByTestId('searchButton');
    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.click(searchButton);
    expect(window.location.search).toBe('?page=1');
  });
});
