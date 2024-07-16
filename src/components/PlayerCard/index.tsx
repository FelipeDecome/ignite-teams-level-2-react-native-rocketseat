

import { IconButton } from "@components/IconButton";

import { Container, Icon, Name } from "./styles";

interface IPlayerCardProps {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove, ...rest }: IPlayerCardProps) {
  return (
    <Container {...rest}>
      <Icon name="person" />

      <Name>{name}</Name>

      <IconButton
        icon="close"
        type="secondary"
        onPress={onRemove}
      />
    </Container>
  );
}
