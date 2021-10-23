import React from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import {
  Address,
  Info,
  Rating,
  ResturantCard,
  ResturantCardCover,
  Title,
} from "./resturant-info-styled";
export const ResturantInfoComponent = (resturant = {}) => {
  const {
    title = "SomeThing Resturants",
    address = "Kapan Kathmandu",
    rating = 4.5,
  } = resturant;

  const ratingStar = Array.from(new Array(Math.floor(rating)));
  // const Open = Array.from(new Array(Math.floor(rating)));
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <ResturantCard elevation={5}>
        <ResturantCardCover source={{ uri: "https://picsum.photos/700" }} />
        <Info>
          <Title>{title}</Title>

          <Rating>
            {ratingStar.map((e, i) => (
              <SvgXml xml={star} height={20} width={20} key={i} />
            ))}
          </Rating>

          <Address>{address}</Address>
        </Info>
      </ResturantCard>
    </TouchableOpacity>
  );
};
