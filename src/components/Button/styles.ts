import styled, { css } from "styled-components/native";

export type ButtonTypes = "primary" | "secondary";

const TYPE_COLOR_MAP = {
  primary: "green",
  secondary: "red",
} as const;

interface IButtonProps {
  type: ButtonTypes;
}

export const Container = styled.TouchableOpacity<IButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => theme.colors[TYPE_COLOR_MAP[type]][700]};
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.size.md}px;
    font-family: ${theme.font.family.bold};
  `}
`;
