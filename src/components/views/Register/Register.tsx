import { Button, Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { visiblePassword, handleVisiblePassword } = useRegister();
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

          <form className="flex w-80 flex-col gap-4">
            <Input
              type="text"
              label="Fullname"
              variant="bordered"
              autoComplete="off"
              isClearable
            />
            <Input
              type="text"
              label="Username"
              variant="bordered"
              autoComplete="off"
              isClearable
            />
            <Input
              type="enail"
              label="Email"
              variant="bordered"
              autoComplete="off"
              isClearable
            />
            <Input
              type={visiblePassword.password ? "text" : "password"}
              label="Password"
              variant="bordered"
              autoComplete="off"
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

            <Input
              type={visiblePassword.passwordConfirmation ? "text" : "password"}
              label="Password Confirmation"
              variant="bordered"
              autoComplete="off"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("passwordConfirmation")}
                >
                  {visiblePassword.passwordConfirmation ? (
                    <FaEye className="text-default text-default-400 pointer-events-none text-xl" />
                  ) : (
                    <FaEyeSlash className="text-default text-default-400 pointer-events-none text-xl" />
                  )}
                </button>
              }
            />
            <Button color="danger">Register</Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
