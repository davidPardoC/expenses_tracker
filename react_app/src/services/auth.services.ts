import axios from "axios";
import { User } from "../entities/user";

export class AuthServices {
  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ access: string; refresh: string }> {
    const { data } = await axios.post("/api/token/", {
      email,
      password,
    });
    return data;
  }

  async getUserProfile(userId: number) {
    const { data } = await axios.get(
      `/api/users/${userId}/`
    );
    return data;
  }

  async updateProfile(userId: number, user: Partial<User>) {
    const { data } = await axios.put(
      `/api/users/${userId}/`,
      user
    );
    return data;
  }

  async signup(user: User) {
    const { data } = await axios.post(
      "/api/users/signup/",
      user
    );
    return data;
  }

  async refreshSession(refresh:string) {
    const { data } = await axios.post(
      "/api/token/refresh/",
      { refresh }
    );
    return data
  }
}
