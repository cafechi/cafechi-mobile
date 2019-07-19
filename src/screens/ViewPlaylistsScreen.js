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
  FlatList,
  View,
  Text,
  Image,
  StatusBar
} from "react-native";
import { Button, Card, Icon, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { getPlaylistList } from "../redux/actions/playerActions";

class ViewPlaylistsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    keyExtractor = (item, index) => {
      return index.toString();
    };

    renderItem = ({ item, index }) => {
      let subtitle = "";
      if (item.hasOwnProperty("tracks")) {
        item.tracks.forEach(
          (track, index) =>
            (subtitle +=
              track.title + (index < item.tracks.length - 1 ? ", " : ""))
        );
      }

      return (
        <ListItem
          title={item.title}
          subtitle={<Text numberOfLines={1}>{subtitle}</Text>}
          leftAvatar={{ source: require("../images/ariana-grande.jpg") }}
          onPress={() =>
            this.props.navigation.navigate("PlaylistDetails", {
              playlist: item
            })
          }
        />
      );
    };

    return (
      <Fragment>
        <Button
          title="reload playlists"
          type="clear"
          onPress={() => this.props.getPlaylistList()}
        />

        <FlatList
          keyExtractor={keyExtractor}
          data={this.props.playlists}
          renderItem={renderItem}
        />
      </Fragment>
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
