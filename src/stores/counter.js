import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value++;
    },
    decremented: (state) => {
      state.value--;
    },
    set: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { incremented, decremented, set } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
