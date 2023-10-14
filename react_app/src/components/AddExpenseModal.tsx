import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import ExpenseForm from "./ExpenseForm";

const AddExpenseModal = ({
  isOpen,
  onOpenChange,
  categories
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  categories: any[]
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="dark text-foreground">
        <ModalBody>
            <ExpenseForm categories={categories} onOpenExpenseModalChange={onOpenChange}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddExpenseModal;
