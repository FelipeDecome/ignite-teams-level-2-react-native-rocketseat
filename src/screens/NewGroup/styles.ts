import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.green["700"],
}))`
  align-self: center;
`;
