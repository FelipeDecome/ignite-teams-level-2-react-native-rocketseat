import { UsersThree } from "phosphor-react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray["500"]};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding: 32px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.size.lg}px;
    font-family: ${theme.font.family.regular};
    color: ${theme.colors.white};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.green["700"],
  weight: 'fill'
}))``;
