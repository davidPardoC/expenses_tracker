import axios from "axios";

export class CategoryServices {
  async getCategories() {
    const { data } = await axios.get("http://192.168.1.5:8000/api/categories/");
    return data;
  }

  async createCategory(data: { name: string }) {
    const { data: responseData } = await axios.post(
      `http://192.168.1.5:8000/api/categories/`,
      data
    );
    return responseData;
  }
}
