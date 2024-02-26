import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface Props {
    error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
};

export default function ErrorMsg({error}: Props){
    
    return(
        <p className="text-red-700 pt-2">{error?.toString()}</p>
    );
}