import type { FC } from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  text: string;
  variant: "outlined" | "contained" | "text" | undefined;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  variant,
  disabled = false,
  onClick,
}) => {
  return (
    <MuiButton variant={variant} disabled={disabled} onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default Button;
