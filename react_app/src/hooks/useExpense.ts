import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ExpensesServices } from "../services/expenses.services";
import { useAppDispatch } from "./useAppDispatch";
import { addExpense } from "../slices/expensesSlice";

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

  const onSubmit = async (data: Inputs) => {
    try {
      const newExpense = await expensesService.registerExpenses(data);
      dispatch(addExpense(newExpense));
      onOpenExpenseModalChange(false);
    } catch (error) {}
  };

  return { control, onSubmit, handleSubmit, errors };
};
