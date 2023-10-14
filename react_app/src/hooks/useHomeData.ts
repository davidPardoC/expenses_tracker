import { useEffect, useState } from "react";
import { CategoryServices } from "../services/category.services";
import { ExpensesServices } from "../services/expenses.services";
import { setExpenses, setCategories, setTotal } from "../slices/expensesSlice";
import { useAppDispatch, useAppSelector } from "./useAppDispatch";

const categoryServicies = new CategoryServices();
const expensesServices = new ExpensesServices();

export const useHomeData = () => {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector((state) => state.expenses);
  const categories = useAppSelector((state) => state.categories);
  const totalSpent = useAppSelector((state) => state.total);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const categories = await categoryServicies.getCategories();
      const { results: expenses } = await expensesServices.getExpenses();
      const { total } = await expensesServices.getTotalSpent();
      dispatch(setTotal(total));
      dispatch(setExpenses(expenses));
      dispatch(setCategories(categories));
      setCategories(categories);
      setLoading(false);
    })();
  }, []);

  return { categories, loading, expenses, totalSpent };
};
