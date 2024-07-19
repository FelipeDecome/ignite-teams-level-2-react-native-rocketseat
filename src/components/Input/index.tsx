import { ForwardedRef, forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";

interface IInputProps extends TextInputProps {}

function BaseInput({ ...rest }: IInputProps, ref: ForwardedRef<TextInput>) {
  return (
    <Container ref={ref} {...rest} />
  )
}

export const Input = forwardRef(BaseInput);
