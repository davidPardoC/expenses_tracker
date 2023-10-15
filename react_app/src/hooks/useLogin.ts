import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthServices } from "../services/auth.services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const authServices = new AuthServices();

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Should enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const useLogin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const onSubmit = async (data: Inputs) => {
    setIsLoading(true)
    try {
      const { access, refresh } = await authServices.login(data);
      localStorage.setItem("token", access);
      localStorage.setItem("refreshToken", refresh);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    errors,
    isLoading
  };
};
