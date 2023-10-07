import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return { control, onSubmit, handleSubmit, errors };
};
