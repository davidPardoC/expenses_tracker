import { useForm } from "react-hook-form";

export const useExpense = () => {
  const { control } = useForm();
  return { control };
};
