import { AxiosError } from "axios";

export const getAxiosFirstMessage = (error:AxiosError) => {
    let message = "Error"
    if (error.response?.data) {
        const firstKey = Object.keys((error as any).response.data)[0];
        message = (error as any).response.data[firstKey][0]
      }
    return message
}