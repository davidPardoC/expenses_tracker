import { useRouteLoaderData } from "react-router-dom";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import { User } from "../entities/user";

const ProfilePage = () => {
  const { user } = useRouteLoaderData("profile") as { user: User };

  return (
    <>
      <Header user={user} />
      <ProfileForm user={user} />
    </>
  );
};

export default ProfilePage;
