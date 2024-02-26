import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegisterReturn
}

export default function Input({register, ...props}: Props) {
  return (
    <input
      className="form w-full rounded-md py-2 px-5 mt-5 bg-transparent border border-gray-400"
      {...props}
      {...register}
    />
  );
}
