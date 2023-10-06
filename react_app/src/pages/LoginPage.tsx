import { Button, Input } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";
import { Controller } from "react-hook-form";

const LoginPage = () => {
  const { handleSubmit, onSubmit, control, errors } = useLogin();

  return (
    <div className="container mx-auto">
      <form
        className="flex-col p-5 min-w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center mb-2 font-bold text-2xl">ExTrack</h1>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              label="Email"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              className="mt-2"
              type={"password"}
              label="Password"
              {...field}
            />
          )}
        />
        <Button className="mt-2 min-w-full" type="submit" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
