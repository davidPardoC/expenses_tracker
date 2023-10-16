import { AxiosError } from "axios";

export const getAxiosFirstMessage = (
  error: AxiosError<{ [key: string]: string }>
) => {
  let message = "Error";
  if (error.response?.data) {
    const firstKey: string = Object.keys(error.response.data as object)[0];
    message = error.response.data[firstKey][0];
  }
  return message;
};
