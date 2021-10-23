import { StatusBar as ExpoStatus } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Tabs } from "./src/tabs";
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Tabs />
      </ThemeProvider>

      <ExpoStatus style="auto" />
    </>
  );
}
