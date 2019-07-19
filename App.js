/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";

import ViewPlaylistsScreen from "./src/screens/ViewPlaylistsScreen";
import PlaylistScreen from "./src/screens/PlaylistScreen";
import configureStore from "./src/redux/configure";

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    ViewPlaylists: {
      screen: ViewPlaylistsScreen
    },
    PlaylistDetails: {
      screen: PlaylistScreen
    }
  },
  {
    initialRouteName: "ViewPlaylists"
  }
);

const MyApp = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <MyApp />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
