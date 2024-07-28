import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const mockData = {
  count: 1,
  next: '',
  previous: '',
  results: [],
};

describe('Pagination tests', () => {
  test('should make sure the component updates URL query parameter when page changes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination cardsData={mockData} searchInputValue={''} />
        </BrowserRouter>
        ,
      </Provider>,
    );

    const paginationButton = screen.getByText('1');
    expect(paginationButton).toBeInTheDocument();
    fireEvent.click(paginationButton);
    expect(window.location.search).toBe('?page=1');
  });
});
