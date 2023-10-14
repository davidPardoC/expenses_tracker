import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../slices/expensesSlice";

const store = configureStore({
  reducer: expensesReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
