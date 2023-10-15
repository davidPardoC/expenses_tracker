import axios from "axios";

export class CategoryServices {
  async getCategories() {
    const { data } = await axios.get("/api/categories/");
    return data;
  }

  async createCategory(data: { name: string }) {
    const { data: responseData } = await axios.post(
      `/api/categories/`,
      data
    );
    return responseData;
  }
}
