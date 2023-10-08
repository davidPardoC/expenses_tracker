import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ExpensesServices } from "../services/expenses.services";

const expensesService = new ExpensesServices()

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

export const useExpense = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: Inputs) => {
    await expensesService.registerExpenses(data)
  };

  return { control, onSubmit, handleSubmit, errors };
};
