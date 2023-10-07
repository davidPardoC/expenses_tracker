import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  const navigateToPorfile = () => {
    navigate("/profile")
  }
  
  const signOut = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="p-3 flex justify-end">
      <Dropdown>
        <DropdownTrigger>
          <Avatar name="David" />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={navigateToPorfile}>Profile</DropdownItem>
          <DropdownItem onClick={signOut} >Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
