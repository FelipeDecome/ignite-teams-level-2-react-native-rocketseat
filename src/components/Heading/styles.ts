import styled, { css } from "styled-components/native";

export const Container = styled.View`
  gap: 4px;

  width: 100%;
  padding: 24px 0 32px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font.size.xl}px;
    font-family: ${theme.font.family.bold};
    color: ${theme.colors.white};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font.size.md}px;
    font-family: ${theme.font.family.regular};
    color: ${theme.colors.gray["300"]};
  `}
`;
