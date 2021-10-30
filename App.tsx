// Main
import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import { StatusBar } from "expo-status-bar";

// Navigation Setup
import MainStackNavigator from "./src/navigation";

// Paper Setup
import { Provider as PaperProvider } from "react-native-paper";

// Redux Store
import { Provider as StoreProvider } from "react-redux";
import makeStore from "./src/store";

const store = makeStore();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <MainStackNavigator />
          <StatusBar style="auto" />
        </PaperProvider>
      </StoreProvider>
    );
}
