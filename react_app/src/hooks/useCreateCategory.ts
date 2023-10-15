import { useForm } from "react-hook-form";
import { CategoryServices } from "../services/category.services";
import { useAppDispatch } from "./useAppDispatch";
import { addCategory } from "../slices/expensesSlice";
import { Dispatch, SetStateAction, useState } from "react";

const categoryServices = new CategoryServices();

export const useCreateCategory = (onOpenChange:Dispatch<SetStateAction<boolean>>) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<{ name: string }>();
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: { name: string }) => {
    setIsLoading(true)
    try {
      const newCategory = await categoryServices.createCategory(data);
      dispatch(addCategory(newCategory))
      onOpenChange(false)
    } catch (error) {
      
    }
    setIsLoading(false)
  };
  return { control, errors, handleSubmit, onSubmit, isLoading };
};
