import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface IGroupCardProps extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: IGroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
