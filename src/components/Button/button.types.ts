import { ButtonProps } from "@mui/material";

export interface BtnProps extends ButtonProps {
  text: string;
  wrapperClassName?: string;
  onChange?: (event) => void;
  handleClick?: () => void;
}
