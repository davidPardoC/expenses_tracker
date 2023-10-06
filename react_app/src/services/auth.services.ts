import axios from "axios";

export class AuthServices {
  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ access: string; refresh: string }> {
    const { data } = await axios.post("http://localhost:8000/api/token/", {
      email,
      password,
    });
    return data;
  }
}
