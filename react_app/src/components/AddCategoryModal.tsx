import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from "react";

const AddCategoryModal = ({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="dark text-foreground">
        <ModalBody>
          <form className="grid p-2">
            <Input />
            <Button className="mt-2" color="primary">
              Add
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddCategoryModal;
