import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface PropTypes {
  status: "success" | "failed";
}
const Activation = (props: PropTypes) => {
  const { status } = props;
  const router = useRouter();
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src={
            status === "success"
              ? "/images/illustrations/success.svg"
              : "/images/illustrations/pending.svg"
          }
          alt="success-logo"
          width={180}
          height={180}
        />
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-danger-500 text-3xl font-bold">
          {status === "success" ? "Activation Success" : "Activation Failed"}
        </h1>

        <p className="text-default-500 text-xl font-bold">
          {status === "success"
            ? "Thank you for activating your account!"
            : "Sorry, we couldn't activate your account. Your confirmation code is invalid"}
        </p>

        <Button
          className="mt-4"
          variant="bordered"
          color="danger"
          onPress={() => router.push("/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Activation;
