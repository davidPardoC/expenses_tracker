import axios from "axios";

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
}
