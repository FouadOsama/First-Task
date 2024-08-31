import React from "react";
import TextField from "@mui/material/TextField";
import { InputProps } from "./input.types";
import "./Input.scss";

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  wrapperClassName,
  name,
  onChange,
  error,
  multiline,
  rows,
  maxLength,
}): JSX.Element => {
  return (
    <div className={`w-full ${wrapperClassName}`}>
      <TextField
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        className="w-full !bg-inputBg "
        size="small"
        variant="filled"
        onChange={(e) => onChange(e)}
        multiline={multiline}
        rows={rows}
      />
      <p className="text-danger">{error}</p>
    </div>
  );
};

export default Input;
