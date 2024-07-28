import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDetaildPersoneState {
  persone: string;
}

const initialState: IDetaildPersoneState = {
  persone: '1',
};

export const detaildPersoneSlice = createSlice({
  name: 'detaildPersone',
  initialState,
  reducers: {
    setDetaildPersoneName: (state, action: PayloadAction<string>) => {
      state.persone = action.payload;
    },
  },
});

export const { setDetaildPersoneName } = detaildPersoneSlice.actions;

export default detaildPersoneSlice.reducer;
