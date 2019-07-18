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
  FlatList,
  View,
  Text,
  Image,
  StatusBar
} from "react-native";
import { Button, Card, Icon, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { getPlaylistList } from "../redux/actions/playerActions";

class ViewPlaylistsScreen extends React.Component {
  keyExtractor(item, index) {
    return index.toString();
  }

  renderItem({ item }) {
    return (
      <ListItem
        title={item.title}
        subtitle="my subtitle"
        leftAvatar={{ source: require("../images/ariana-grande.jpg") }}
      />
    );
  }

  render() {
    return (
      <>
        <Button
          title="reload playlists"
          type="clear"
          onPress={() => this.props.getPlaylistList()}
        />

        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.playlists}
          renderItem={this.renderItem}
        />
      </>
    );
  }
}

//Map the redux state to your props.
const mapStateToProps = state => ({
  playlists: state.player.playlists,
  playlistsLoading: state.player.playlistsLoading,
  errorMessage: state.player.errorMessage
});

//Map your action creators to your props.
const mapDispatchToProps = dispatch => ({
  getPlaylistList: () => dispatch(getPlaylistList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPlaylistsScreen);
