import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthServices } from "../services/auth.services";
import { User } from "../entities/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "./useError";
import { AxiosError } from "axios";
import { getAxiosFirstMessage } from "../utils/error";

const authServices = new AuthServices();

interface Inputs {
  email: string;
  password: string;
  password_confirmation: string;
}

const schema = yup.object({
  first_name: yup.string(),
  last_name: yup.string(),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

export const useSignup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { fireError } = useError();

  const onSubmit = async (data: Inputs) => {
    setLoading(true);
    try {
      await authServices.signup(data as unknown as User);
      navigate("/login");
    } catch (error: unknown) {
      fireError(getAxiosFirstMessage(error as AxiosError));
    }
    setLoading(false);
  };

  return { control, onSubmit, handleSubmit, errors, loading };
};
