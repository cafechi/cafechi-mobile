/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
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

import ViewPlaylistsScreen from "./src/screens/ViewPlaylistsScreen";
import configureStore from "./src/redux/configure";

const store = configureStore();

const App = () => {
  return <ViewPlaylistsScreen />;
};

class AppContianer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default AppContianer;
