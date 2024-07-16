import { TouchableOpacityProps } from "react-native";
import { Container, IFilterStyleProps, Title } from "./styles";

interface IFilterProps extends TouchableOpacityProps, IFilterStyleProps {
  title: string;
}

export function Filter({ isActive, title, ...rest }: IFilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
