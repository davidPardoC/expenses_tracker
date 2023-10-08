import { useEffect, useState } from "react";
import { CategoryServices } from "../services/category.services";
import { ExpensesServices } from "../services/expenses.services";

const categoryServicies = new CategoryServices();
const expensesServices = new ExpensesServices();

export const useHomeData = () => {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const categories = await categoryServicies.getCategories();
      const { results: expenses } = await expensesServices.getExpenses();
      setExpenses(expenses);
      setCategories(categories);
      setLoading(false);
    })();
  }, []);

  return { categories, loading, expenses };
};
