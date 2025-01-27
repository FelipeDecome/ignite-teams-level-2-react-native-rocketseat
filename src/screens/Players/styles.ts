import styled, { css } from "styled-components/native";

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray["700"]};

  flex-direction: row;
  justify-content: center;
  gap: 8px;

  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 24px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray["200"]};
    font-size: ${theme.font.size.sm}px;
    font-family: ${theme.font.family.bold};
  `};
`;
