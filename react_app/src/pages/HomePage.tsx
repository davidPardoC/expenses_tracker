import ExpenseForm from "../components/ExpenseForm";
import Header from "../components/Header";
import { useCategories } from "../hooks/useCategories";

const HomePage = () => {
  const { categories } = useCategories();
  return (
    <>
      <Header />
      <ExpenseForm categories={categories} />
    </>
  );
};

export default HomePage;
