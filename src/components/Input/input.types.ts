export interface InputProps {
    placeholder: string;
    value?:string;
    type: string;
    wrapperClassName?: string;
    name: string;
    onChange: (value) => void;
    error?: string;
    multiline?: boolean;
    rows?: number;
    maxLength? :number;
    
}