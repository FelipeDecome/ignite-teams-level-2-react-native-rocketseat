import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonTypes, Container, Text } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  type?: ButtonTypes
}

export function Button({ children, type = 'primary', ...rest }: IButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Text>{children}</Text>
    </Container>
  )
}
