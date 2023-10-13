import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { Expense } from "../entities/expense";

const ExpensesList = ({ expenses }: { expenses: Expense[] }) => {
  return (
    <div className="p-4">
      <h2>Last expenses</h2>
      <ScrollShadow className="h-[75vh]">
        {expenses.map(({ name, id, amount }) => (
          <Card key={id} className="mt-3 text-sm">
            <CardBody>
              <div className="flex justify-between">
                <span>{name}</span>
                <span>${amount}</span>
              </div>
            </CardBody>
          </Card>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default ExpensesList;
