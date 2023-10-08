import { useRouteLoaderData } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import Header from "../components/Header";
import { useHomeData } from "../hooks/useCategories";
import { User } from "../entities/user";
import ExpensesList from "../components/ExpensesList";

const HomePage = () => {
  const { categories, loading, expenses } = useHomeData();
  const { user } = useRouteLoaderData("home") as { user: User };
  console.log(expenses)
  return (
    <>
      <Header user={user} />
      <ExpenseForm categories={categories} />
      <ExpensesList expenses={expenses} />
    </>
  );
};

export default HomePage;
