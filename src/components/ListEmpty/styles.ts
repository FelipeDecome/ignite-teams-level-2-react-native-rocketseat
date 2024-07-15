import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font.size.sm}px;
    font-family: ${theme.font.family.regular};
    color: ${theme.colors.gray["300"]};
  `}
`;
