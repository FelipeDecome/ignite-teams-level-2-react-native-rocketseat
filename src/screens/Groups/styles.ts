import { FlatList } from "react-native";
import styled from "styled-components/native";

type GroupItem = {
  title: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray["600"]};
  padding: 24px;
`;

export const GroupList = styled(FlatList<GroupItem>).attrs({
  contentContainerStyle: {
    gap: 12,
  },
  showsVerticalScrollIndicator: false,
})``;
