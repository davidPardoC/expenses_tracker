import { Button, Input } from "@nextui-org/react";
import { User } from "../entities/user";
import { useProfile } from "../hooks/useProfile";
import { Controller } from "react-hook-form";

const ProfileForm = ({ user }: { user: User }) => {
  const { control, handleSubmit, onSubmit, isLoading } = useProfile(user);

  return (
    <form className="grid gap-4 p-3" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="first_name"
        render={({ field }) => <Input label="First Name" {...field} />}
      />
      <Controller
        control={control}
        name="last_name"
        render={({ field }) => <Input label="Last Name" {...field} />}
      />
      <Controller
        name="monthly_budget"
        control={control}
        render={({ field }) => (
          <>
            {/*@ts-ignore*/}
            <Input
              label="Monthly budget"
              type="number"
              {...field}
              description="Monthly budget you are willing to spend."
            />
          </>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input label="Email" type="email" {...field} readOnly />
        )}
      />
      <Button type="submit" color="primary" isLoading={isLoading}>
        Update
      </Button>
    </form>
  );
};

export default ProfileForm;
