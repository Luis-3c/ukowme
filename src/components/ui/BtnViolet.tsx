interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function BtnViolet({ children, ...props }: Props) {
  return (
    <button className="bg-violet-900 hover:bg-violet-950 p-4 w-full rounded-lg mt-5" {...props}>
      {children}
    </button>
  );
}
