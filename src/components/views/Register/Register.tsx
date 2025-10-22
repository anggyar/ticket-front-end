import { Button, Card, CardBody, Input, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();

  console.log(errors);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 py-10 lg:w-1/3 lg:py-0">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />

        <Image
          src="/images/illustrations/login.svg"
          alt="login"
          width={1024}
          height={1024}
          className="w-2/3 lg:w-full"
        />
      </div>
      <Card>
        <CardBody className="p-8">
          <h2 className="text-danger-500 text-xl font-bold">Create Account</h2>
          <p className="mb-4 text-sm">
            Have an account?&nbsp;
            <Link
              href={"/auth/login"}
              className="text-danger-400 font-semibold"
            >
              Login Here
            </Link>
          </p>
          {errors.root && (
            <p className="text-danger mb-2 font-medium">
              {errors?.root?.message}
            </p>
          )}

          <form
            className={cn(
              "flex w-80 flex-col",
              Object.keys(errors).length > 0 ? "gap-2" : "gap-4"
            )}
            onSubmit={handleSubmit(handleRegister)}
          >
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Fullname"
                  variant="bordered"
                  autoComplete="off"
                  isClearable
                  isInvalid={errors.fullName !== undefined}
                  errorMessage={errors.fullName?.message}
                />
              )}
            />

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Username"
                  variant="bordered"
                  autoComplete="off"
                  isClearable
                  isInvalid={errors.username !== undefined}
                  errorMessage={errors.username?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Email"
                  variant="bordered"
                  autoComplete="off"
                  isClearable
                  isInvalid={errors.email !== undefined}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={visiblePassword.password ? "text" : "password"}
                  label="Password"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword("password")}
                    >
                      {visiblePassword.password ? (
                        <FaEye className="text-default text-default-400 pointer-events-none text-xl" />
                      ) : (
                        <FaEyeSlash className="text-default text-default-400 pointer-events-none text-xl" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={visiblePassword.confirmPassword ? "text" : "password"}
                  label="Password Confirmation"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.confirmPassword !== undefined}
                  errorMessage={errors.confirmPassword?.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword("confirmPassword")}
                    >
                      {visiblePassword.confirmPassword ? (
                        <FaEye className="text-default text-default-400 pointer-events-none text-xl" />
                      ) : (
                        <FaEyeSlash className="text-default text-default-400 pointer-events-none text-xl" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Button color="danger" type="submit">
              {isPendingRegister ? (
                <Spinner color="danger" label="Loading..." size="sm"></Spinner>
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
