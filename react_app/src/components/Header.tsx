import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { User } from "../entities/user";

const Header = ({ user }: { user: User }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateToPorfile = () => {
    navigate("/profile");
  };

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-3 flex justify-between items-center">
      <span className="hover:cursor-pointer">
        {pathname !== "/" && (
          <BiArrowBack size={"1.5em"} onClick={() => navigate(-1)} />
        )}
      </span>
      <Dropdown >
        <DropdownTrigger>
          <Avatar className="hover:cursor-pointer" name={user.first_name ?? "USER"} />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={navigateToPorfile}>Profile</DropdownItem>
          <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
