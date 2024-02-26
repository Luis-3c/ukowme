"use client";

import Input from "@/components/ui/Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { signUp } from "@/services/userService";
import ErrorMsg from "@/components/ui/ErrorMsg";

export default function RegisterForm() {
  const [isRegistered, setIsRegistered] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
     const res = await signUp();
    console.log("res: ", res);
    setIsRegistered(true);
  };

  useEffect(() => {
    if (isRegistered) router.push("/login");
  }, [isRegistered]);

  return (
    <>
      <h1 className="text-center text-3xl">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          register={register("name", { required: "This field is required" })}
        />
        {errors.name && <ErrorMsg error={errors.name.message} />}

        <Input
          type="text"
          id="userName"
          placeholder="User Name"
          register={register("userName", { required: "This field is required" })}
        />
        {errors.userName && <ErrorMsg error={errors.userName.message} />}

        <Input
          type="text"
          id="email"
          placeholder="Email"
          register={register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && <ErrorMsg error={errors.email.message} />}

        <Input
          type="password"
          id="password"
          placeholder="Password"
          register={register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "password must contain at least 6 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d_-]{8,}$/,
              message:
                "The password must contain at least 8 characters, 1 capital letter, 1 number and 1 special character",
            },
          })}
        />
        {errors.password && <ErrorMsg error={errors.password.message} />}
        <button className="bg-violet-900 hover:bg-violet-950 p-4 w-full rounded-lg mt-5">
          SEND
        </button>
      </form>
    </>
  );
}
