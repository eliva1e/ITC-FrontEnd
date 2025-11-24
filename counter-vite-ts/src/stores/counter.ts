import { createSlice, configureStore } from '@reduxjs/toolkit';
import {
  useDispatch,
  useSelector,
  useStore,
  type TypedUseSelectorHook,
} from 'react-redux';

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

export type CounterStore = typeof store;
export type RootState = ReturnType<CounterStore['getState']>;
export type CounterDispatch = CounterStore['dispatch'];

export const useCounterDispatch: () => CounterDispatch = useDispatch;
export const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCounterStore: () => CounterStore = useStore;
