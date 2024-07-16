import styled, { css } from "styled-components/native";

export interface IFilterStyleProps {
  isActive?: boolean;
}

export const Container = styled.TouchableOpacity<IFilterStyleProps>`
  ${({ theme, isActive }) => css`
    border: 1px solid ${isActive ? theme.colors.green["700"] : 'transparent'};
  `}

  border-radius: 4px;

  padding: 8px 12px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.size.sm}px;
    font-family: ${theme.font.family.bold};
  `}
`;
