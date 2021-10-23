import React from "react";
import { Searchbar } from "react-native-paper";
import { ResturantInfoComponent } from "../components/resturant-info-component";
import {
  ResturantInfo,
  SafeArea,
  SearchBarContainer,
} from "./resturant.screen.styled";
const ResturantScreen = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      <ResturantInfo>
        <ResturantInfoComponent />
      </ResturantInfo>
    </SafeArea>
  );
};
export default ResturantScreen;
