import React from "react";
// import { Button } from "@mui/material/Button";
import { Button } from "@mui/material/";
import { BtnProps } from "./button.types";

const Btn: React.FC<BtnProps> = ({
  onChange,
  type,
  color,
  variant,
  size,
  text,
  wrapperClassName,
  disabled,
	handleClick
}): JSX.Element => {
  return (
    <div className={`m-0 p-0 flex justify-center  ${wrapperClassName}`}>
      <Button
        color={color}
        type={type}
        variant={variant}
        size={size}
        disabled={disabled}
        onChange={onChange}
        onClick={handleClick}
      >
        {text}
      </Button>
    </div>
  );
};
export default Btn;
