import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchInputValueState {
  searchValue: string;
}

const initialState: ISearchInputValueState = {
  searchValue: '',
};

export const searchInputValueSlice = createSlice({
  name: 'searchInputValue',
  initialState,
  reducers: {
    searchInputValueChange: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { searchInputValueChange } = searchInputValueSlice.actions;

export default searchInputValueSlice.reducer;
