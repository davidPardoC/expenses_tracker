import axios from "axios";
import jwtDecode from "jwt-decode";
import { redirect } from "react-router-dom";
import { AuthServices } from "../services/auth.services";

const authServices = new AuthServices();

export const isUserLoged = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const authLoader = async () => {
  const token = isUserLoged();
  if (!token) {
    redirect("/");
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const { user_id } = jwtDecode<{ user_id: number }>(token as string);
  const user = await authServices.getUserProfile(user_id);
  return { user: { ...user, user_id } };
};
