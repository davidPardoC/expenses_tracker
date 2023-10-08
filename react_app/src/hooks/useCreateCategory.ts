import { useForm } from "react-hook-form";
import { CategoryServices } from "../services/category.services";

const categoryServices = new CategoryServices();

export const useCreateCategory = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<{ name: string }>();

  const onSubmit = async (data: { name: string }) => {
    await categoryServices.createCategory(data);
  };
  return { control, errors, handleSubmit, onSubmit };
};
