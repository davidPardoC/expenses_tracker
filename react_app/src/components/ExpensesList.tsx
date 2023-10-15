import {
  Card,
  CardBody,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  ScrollShadow,
} from "@nextui-org/react";
import { Expense } from "../entities/expense";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const ExpensesList = ({ expenses }: { expenses: Expense[] }) => {
  return (
    <div className="p-4">
      <h2>Last expenses</h2>
      <ScrollShadow className="max-h-[73vh]">
        {expenses.map(({ name, id, amount }) => (
          <Card key={id} className="mt-3 text-sm">
            <CardBody>
              <div className="flex justify-between">
                <span>{name}</span>
                <span className="flex items-center">
                  <Chip variant="bordered" color="success">
                    ${amount}
                  </Chip>
                  <span className="flex items-center gap-4 ">
                    <Dropdown showArrow>
                      <DropdownTrigger>
                        <span>
                          <CiMenuKebab size={"1.5rem"} />
                        </span>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Profile Actions"
                        variant="flat"
                        className="max-w-fit"
                      >
                        <DropdownItem key="update">
                          <span className="flex items-center justify-end">
                            Update
                            <AiOutlineEdit size={"1.2rem"} className="ml-1" />
                          </span>
                        </DropdownItem>
                        <DropdownItem key="delete">
                          <span className="flex items-center justify-end">
                            Delete
                            <AiOutlineDelete
                              size={"1.2rem"}
                              className="ml-1 text-danger"
                            />
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </span>
                </span>
              </div>
            </CardBody>
          </Card>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default ExpensesList;
