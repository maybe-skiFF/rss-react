import { useState, useEffect } from 'react';

const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchInputValue') ?? '',
  );

  useEffect(() => {
    return () => {
      localStorage.setItem('searchInputValue', searchValue);
    };
  }, [searchValue]);

  return [searchValue, setSearchValue] as const;
};

export { useSearchValue };
