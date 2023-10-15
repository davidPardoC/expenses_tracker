import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ExpensesServices } from "../services/expenses.services";
import { useAppDispatch } from "./useAppDispatch";
import { addExpense, setTotal } from "../slices/expensesSlice";
import { useState } from "react";

const expensesService = new ExpensesServices();

interface Inputs {
  amount: number;
  name: string;
  category: number;
}

const schema = yup.object({
  amount: yup.number().min(1).required(),
  name: yup.string().required(),
  category: yup.number().required(),
});

export const useExpense = (
  onOpenExpenseModalChange: (open: boolean) => void
) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: Inputs) => {
    setIsLoading(true);
    try {
      const newExpense = await expensesService.registerExpenses(data);
      const { total } = await expensesService.getTotalSpent();
      dispatch(addExpense(newExpense));
      dispatch(setTotal(total));
      onOpenExpenseModalChange(false);
    } catch (error) {}
    setIsLoading(false);
  };

  return { control, onSubmit, handleSubmit, errors, isLoading };
};
