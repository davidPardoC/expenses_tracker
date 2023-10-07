import { useEffect, useState } from "react";
import { CategoryServices } from "../services/category.services";

const categoryServicies = new CategoryServices();

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        const categories = await categoryServicies.getCategories()
        setCategories(categories)
        setLoading(false)
    })();
  }, []);

  return { categories, loading };
};
