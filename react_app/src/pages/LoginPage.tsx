import { Button, Input } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const LoginPage = () => {
  const { handleSubmit, onSubmit, control, errors, isLoading } = useLogin();

  return (
    <div className="container mx-auto">
      <form
        className="flex-col p-5 min-w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <img src={Logo} width={"100"} className="mx-auto mb-5" />
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
        <Button
          className="mt-2 min-w-full"
          type="submit"
          color="primary"
          isLoading={isLoading}
        >
          Login
        </Button>
      </form>
      <div className="flex justify-center">
        <Link className="text-center underline" to="/signup">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
