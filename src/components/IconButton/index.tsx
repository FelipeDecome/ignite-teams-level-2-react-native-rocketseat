
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, IconButtonTypes } from "./styles";

interface IIconButtonProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: IconButtonTypes
}

export function IconButton({ icon, type = 'primary', ...rest }: IIconButtonProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
