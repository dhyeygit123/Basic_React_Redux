import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const slice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = slice.actions;
export default slice.reducer;