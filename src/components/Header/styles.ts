import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 24px 0;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-right: auto;
  height: 55px;
  width: 55px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 32,
}))``;
