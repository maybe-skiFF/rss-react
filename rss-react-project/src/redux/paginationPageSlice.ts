import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPaginationPageState {
  pageNum: number;
}

const initialState: IPaginationPageState = {
  pageNum: 1,
};

export const paginationPageSlice = createSlice({
  name: 'paginationPage',
  initialState,
  reducers: {
    paginationPageChange: (state, action: PayloadAction<number>) => {
      state.pageNum = action.payload;
    },
  },
});

export const { paginationPageChange } = paginationPageSlice.actions;

export default paginationPageSlice.reducer;
