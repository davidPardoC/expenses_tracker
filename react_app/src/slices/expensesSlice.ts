import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
  name: "global",
  initialState: {
    expenses: [],
    categories: [],
    total: 0,
  },
  reducers: {
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    addExpense: (state, action) => {
      state.expenses = [...state.expenses].concat(action.payload);
    },
    addCategory: (state, action) => {
      state.categories = [...state.categories].concat(action.payload);
    },
  },
});

export const { setExpenses, setCategories, setTotal, addExpense, addCategory } =
  expensesSlice.actions;
export default expensesSlice.reducer;
