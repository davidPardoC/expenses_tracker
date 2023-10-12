import { useForm } from "react-hook-form";
import { User } from "../entities/user";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthServices } from "../services/auth.services";

const authServices = new AuthServices();

interface Inputs {
  first_name?: string;
  last_name?: string;
  monthly_budget: number;
  email: string;
  username: string;
}

const schema = yup.object({
  first_name: yup.string().optional(),
  last_name: yup.string().optional(),
  monthly_budget: yup.number().min(0).required(),
  email: yup.string().required(),
  username: yup.string().required(),
});

export const useProfile = (user: User) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  useEffect(() => {
    setValue("first_name", user.first_name);
    setValue("last_name", user.last_name);
    setValue("monthly_budget", user.monthly_budget);
    setValue("email", user.email);
    setValue("username", user.username);
  }, []);

  const onSubmit = async (data: Inputs) => {
    await authServices.updateProfile(user.user_id, data);
  };

  return { control, errors, handleSubmit, onSubmit };
};
