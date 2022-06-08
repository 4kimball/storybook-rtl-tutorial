import type { FC } from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  text: string;
  variant: "outlined" | "contained" | "text" | undefined;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, variant, disabled = false }) => {
  return (
    <MuiButton variant={variant} disabled={disabled}>
      {text}
    </MuiButton>
  );
};

export default Button;
