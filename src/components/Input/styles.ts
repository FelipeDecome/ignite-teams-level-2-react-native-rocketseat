import styled, { css } from "styled-components/native";

export const Container = styled.TextInput`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray["700"]};
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.md}px;
    color: ${theme.colors.white};
  `}

  border-radius: 6px;
  padding: 16px;
`;
