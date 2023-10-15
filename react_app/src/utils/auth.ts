import axios, { Axios } from "axios";
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
    return redirect("/login");
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  setAuthInterceptor();
  const { user_id } = jwtDecode<{ user_id: number }>(token as string);
  const user = await authServices.getUserProfile(user_id);
  return { user: { ...user, user_id } };
};

const setAuthInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) {
          window.location.replace("/login");
          return
        }
        const { access } = await authServices.refreshSession(refresh);
        localStorage.setItem("token", access);
        axios.defaults.headers.common.Authorization = `Bearer ${access}`;
        return axios.request(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};
