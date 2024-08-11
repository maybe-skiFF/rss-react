import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const mockData = {
  count: 1,
  next: '',
  previous: '',
  results: [],
};

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    pathname: '/',
    rout: '',
    query: { search: '', page: '1' },
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe('Pagination tests', () => {
  test('should make sure the component updates URL query parameter when page changes', () => {
    render(
      <Provider store={store()}>
        <Pagination cardsData={mockData} searchInputValue={''} />,
      </Provider>,
    );

    const paginationButton = screen.getByText('1');
    expect(paginationButton).toBeInTheDocument();
    fireEvent.click(paginationButton);
    window.history.pushState({}, '', 'search=&page=1');
    expect(window.location.pathname).toBe('/search=&page=1');
  });
});
