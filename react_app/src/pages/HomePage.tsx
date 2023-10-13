import { useRouteLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { useHomeData } from "../hooks/useHomeData";
import { User } from "../entities/user";
import ExpensesList from "../components/ExpensesList";
import BudgetProgress from "../components/BudgetProgress";
import AddNewExpenseButton from "../components/AddNewExpenseButton";
import AddExpenseModal from "../components/AddExpenseModal";
import { useDisclosure } from "@nextui-org/react";

const HomePage = () => {
  const { categories, expenses, totalSpent } = useHomeData();
  const { user } = useRouteLoaderData("home") as { user: User };
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Header user={user} />
      <AddExpenseModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        categories={categories}
      />
      <BudgetProgress budget={user.monthly_budget} spends={totalSpent} />
      <ExpensesList expenses={expenses} />
      <AddNewExpenseButton onClick={onOpenChange} />
    </>
  );
};

export default HomePage;
