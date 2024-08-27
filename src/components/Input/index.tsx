import React from "react";
import TextField from '@mui/material/TextField';
import './Input.scss';


const Input = ({placeholder, value, type, wrapperClassName, name, onChange, error}): JSX.Element => {

  return (
    <div className={`w-full ${wrapperClassName}`}>
      <TextField
        required
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        className="w-full !bg-inputBg"
        size="small"
        variant="filled"
        onChange={onChange}
      />
      <p className="text-danger">{error}</p>
    </div>
  )
}

export default Input;