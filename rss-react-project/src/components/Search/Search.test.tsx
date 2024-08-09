import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Search tests', () => {
  test('should verify that clicking the Search button saves the entered value to the local storage', () => {
    render(
      <Provider store={store()}>
        <Search paginationPageNum={1} />,
      </Provider>,
    );

    const searchInput = screen.getByPlaceholderText('search...');
    const searchButton = screen.getByTestId('searchButton');
    fireEvent.change(searchInput, { target: { value: 'C-3PO' } });
    fireEvent.click(searchButton);
    expect(searchButton).toBeInTheDocument();
    expect(window.localStorage.getItem('searchInputValue')).toBe('C-3PO');
  });

  test('should navigate to page=1 if searchInput is empty', () => {
    render(
      <Provider store={store()}>
        <Search paginationPageNum={1} />,
      </Provider>,
    );

    const searchInput = screen.getByPlaceholderText('search...');
    const searchButton = screen.getByTestId('searchButton');
    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.click(searchButton);
    expect(window.location.search).toBe('?page=1');
  });
});
