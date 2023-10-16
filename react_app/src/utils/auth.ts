import axios from "axios";
import jwtDecode from "jwt-decode";
import { redirect } from "react-router-dom";
import { AuthServices } from "../services/auth.services";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const authServices = new AuthServices();

export const isUserLoged = () => {
  const token = localStorage.getItem("token");
  return token;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshAuthLogic = async (failedRequest: any) => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) return;
  authServices
    .refreshSession(refreshToken)
    .then(({ access }) => {
      failedRequest.response.config.headers.Authorization = "Bearer " + access;
      localStorage.setItem("token", access);
      return Promise.resolve();
    })
    .catch((error) => {
      window.location.replace("/login");
      return Promise.reject(error);
    });
};

export const authLoader = async () => {
  const token = isUserLoged();
  if (!token) {
    return redirect("/login");
  }
  createAuthRefreshInterceptor(axios, refreshAuthLogic, {
    pauseInstanceWhileRefreshing: true,
  });
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const { user_id } = jwtDecode<{ user_id: number }>(token as string);
  const user = await authServices.getUserProfile(user_id);
  return { user: { ...user, user_id } };
};
