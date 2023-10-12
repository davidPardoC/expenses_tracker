import { Button } from "@nextui-org/react";
import { MdAdd } from "react-icons/md";

const AddNewExpenseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      color="primary"
      className="rounded-full h-16 fixed bottom-3 right-3"
      onClick={onClick}
    >
      <MdAdd size={"1.5rem"} />
    </Button>
  );
};

export default AddNewExpenseButton;
