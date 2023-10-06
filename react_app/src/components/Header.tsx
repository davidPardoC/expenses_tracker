import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const Header = () => {
  return (
    <div className="p-3 flex justify-end">
      <Dropdown>
        <DropdownTrigger>
          <Avatar name="David" />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
