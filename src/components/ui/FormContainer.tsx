interface Props extends React.PropsWithChildren {};

export default function FormContainer({children}: Props){
    
    return(
        <div className="w-96 border-0 sm:border mx-auto my-10 p-6 rounded border-violet-400">
            {children}
        </div>
    );
}