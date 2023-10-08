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
    const { data } = await axios.post("http://192.168.1.5:8000/api/token/", {
      email,
      password,
    });
    return data;
  }

  async getUserProfile(userId: number) {
    const { data } = await axios.get(
      `http://192.168.1.5:8000/api/users/${userId}/`
    );
    return data;
  }

  async updateProfile(userId: number, user: Partial<User>) {
    const { data } = await axios.put(
      `http://192.168.1.5:8000/api/users/${userId}/`,
      user
    );
    return data;
  }
}
