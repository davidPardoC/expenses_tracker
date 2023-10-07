import axios from "axios";

export class CategoryServices {
    async getCategories(){
        const {data} = await axios.get("http://localhost:8000/api/categories/")
        return data
    }
}