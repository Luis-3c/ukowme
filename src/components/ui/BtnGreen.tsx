interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function BtnGreen({children, ...props}: Props) {
    return (
        <button className="bg-green-700 hover:bg-green-800 py-2 px-0 w-full rounded-lg mt-5 text-lg" {...props}>
          {children}
        </button>
      );
}