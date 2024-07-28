import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';

interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

interface Props {
  children: ReactElement;
}

const initialState = {
  theme: 'light',
  setTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(initialState);

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
