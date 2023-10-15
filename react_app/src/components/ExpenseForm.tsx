import { Controller } from "react-hook-form";
import { useExpense } from "../hooks/useExpense";
import {
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import AddCategoryModal from "./AddCategoryModal";

const ExpenseForm = ({
  categories = [],
  onOpenExpenseModalChange,
}: {
  categories: { id: number; name: string }[];
  onOpenExpenseModalChange: () => void;
}) => {
  const { isOpen, onOpenChange } = useDisclosure();
  const { control, onSubmit, handleSubmit, errors, isLoading } = useExpense(
    onOpenExpenseModalChange
  );

  return (
    <>
      <AddCategoryModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 grid gap-4">
        <Controller
          control={control}
          name="amount"
          render={({ field }) => (
            <Input
              {...field}
              label="Amount"
              isInvalid={!!errors.amount}
              type="number"
              errorMessage={errors.amount?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              {...field}
              label="Name"
              isInvalid={!!errors.amount}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <div className="flex items-start">
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Select
                {...field}
                label="Category"
                isInvalid={!!errors.amount}
                errorMessage={errors.category?.message}
              >
                {categories.map(({ id, name }) => (
                  <SelectItem key={id} value={id}>
                    {name}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          <Button
            onClick={() => onOpenChange()}
            color="primary"
            className="ml-3"
          >
            Add +
          </Button>
        </div>

        <Button type="submit" color="primary" isLoading={isLoading}>
          Register
        </Button>
      </form>
    </>
  );
};

export default ExpenseForm;
