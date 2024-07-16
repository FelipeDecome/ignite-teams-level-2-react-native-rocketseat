import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export type IconButtonTypes = "primary" | "secondary";

const TYPE_COLOR_MAP = {
  primary: "green",
  secondary: "red",
} as const;

interface IconButtonProps {
  type: IconButtonTypes;
}

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: 56px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<IconButtonProps>(({ theme, type }) => ({
  size: 24,
  color: theme.colors[TYPE_COLOR_MAP[type]]["700"],
}))``;
