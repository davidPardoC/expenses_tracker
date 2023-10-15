import { Button } from "@nextui-org/react";
import { MdAdd } from "react-icons/md";

const AddNewExpenseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      color="primary"
      className="fixed bottom-5 right-4 bg-primary "
      onClick={onClick}
      endContent={<MdAdd size={"1.5rem"} />}
      radius="full"
    >
      <span className="font-bold text-md">Add Expense</span>
    </Button>
  );
};

export default AddNewExpenseButton;
