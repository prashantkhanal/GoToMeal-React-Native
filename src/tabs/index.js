import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainComp from "../features/Resturant/screen/resturant.screen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Maps = () => {
  return (
    <View>
      <Text>Maps</Text>
    </View>
  );
};
const Setting = () => <Text>Setting</Text>;

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#111"
        barStyle={{ backgroundColor: "#DCDCDC", height: 50 }}
      >
        <Tab.Screen
          name="Restutant"
          component={MainComp}
          option={{
            tabBarLabel: "Resturants",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Feed" component={Maps} />
        <Tab.Screen name="Notifications" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
