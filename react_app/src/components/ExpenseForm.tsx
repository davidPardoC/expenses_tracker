import { Controller } from "react-hook-form";
import { useExpense } from "../hooks/useExpense";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

const ExpenseForm = () => {
  const { control } = useExpense();

  return (
    <form action="" className="p-4 grid gap-2">
      <Controller
        control={control}
        name="amount"
        render={() => <Input label="Amount" />}
      />
      <Controller
        control={control}
        name="name"
        render={() => <Input label="Name" />}
      />
      <Controller
        control={control}
        name="category"
        render={() => (
          <Select label="Category">
            <SelectItem key={1} value={1}>
              Streamig
            </SelectItem>
            <SelectItem key={2} value={2}>
              Rent
            </SelectItem>
            <SelectItem key={3} value={3}>
              Groceries
            </SelectItem>
            <SelectItem key={4} value={4}>
              Chill
            </SelectItem>
          </Select>
        )}
      />
      <Button color="primary">Register</Button>
    </form>
  );
};

export default ExpenseForm;
