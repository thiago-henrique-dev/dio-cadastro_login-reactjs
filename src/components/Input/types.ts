import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  leftIcon?: React.ReactNode;
  name: string;
  control: any
  errorMessage?: String;
  placeholder?: string
  type?: string;
  rest?: HTMLInputElement;
}