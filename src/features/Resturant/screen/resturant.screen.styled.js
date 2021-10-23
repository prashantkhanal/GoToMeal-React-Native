import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const SearchBarContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const ResturantInfo = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;
