import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import { useCreateCategory } from "../hooks/useCreateCategory";
import { Controller } from "react-hook-form";

const AddCategoryModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const { control, errors, handleSubmit, onSubmit } = useCreateCategory();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="dark text-foreground">
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} className="grid p-2">
            <Controller
              name="name"
              control={control}
              rules={{
                required: { value: true, message: "Field Required" },
                minLength: {
                  value: 3,
                  message: "Should have at least 3 characters.",
                },
              }}
              render={({ field }) => (
                <Input
                  label="Category Name"
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message as unknown as string}
                  {...field}
                />
              )}
            />
            <Button type="submit" className="mt-2" color="primary">
              Add
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddCategoryModal;
