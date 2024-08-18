import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../interfaces';
import { COUNTRIES } from '../constants/COUNTRIES';

interface IFormDataState {
  formData: IFormData[];
  countries: string[];
}

const initialState: IFormDataState = {
  formData: [],
  countries: COUNTRIES,
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IFormData>) => {
      state.formData.push(action.payload);
    },
  },
});

export const { setFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
