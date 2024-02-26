"use client";

import Input from "@/components/ui/Input";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { login } from "@/services/userService";
import { useUserContext } from "@/hooks/useUserContext";
import BtnViolet from "../ui/BtnViolet";
import ErrorMsg from "../ui/ErrorMsg";

export default function LoginForm() {
  const [isLogged, setIsLogged] = useState(false);
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const res = await login();
    console.log("res: ", res);
    setUser(res);
    setIsLogged(true);
  };

  useEffect(() => {
    if (isLogged) router.push("/home");
  }, [isLogged]);

  return (
    <>
      <h1 className="text-center text-3xl">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="name"
          placeholder="Email or Username"
          register={register("name", { required: "This fiels is required" })}
        />
        {errors.name && <ErrorMsg error={errors.name.message} />}

        <Input
          type="password"
          id="password"
          placeholder="Password"
          register={register("password", {
            required: "This fiels is required",
          })}
        />
        {errors.name && <ErrorMsg error={errors.name.message} />}
        <button className="bg-violet-900 hover:bg-violet-950 p-4 w-full rounded-lg mt-5">
          SEND
        </button>
      </form>
    </>
  );
}
