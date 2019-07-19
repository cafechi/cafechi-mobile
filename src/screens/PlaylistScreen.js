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
  StatusBar,
  Dimensions
} from "react-native";
import { Button, Card, Icon, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { getPlaylistList } from "../redux/actions/playerActions";

class PlaylistScreen extends Component {
  render() {
    const pageWidth = Dimensions.get("screen").width;

    const playlist = this.props.navigation.getParam("playlist", null);
    const trackItems = playlist.tracks.map((item, index) => {
      return (
        <ListItem
          title={item.title}
          subtitle={"some artist place holder"}
          leftAvatar={{ source: require("../images/ariana-grande.jpg") }}
          rightElement={<Text>6:45</Text>}
        />
      );
    });

    return (
      <ScrollView>
        <View>
          <Image
            style={{ width: pageWidth, height: pageWidth }}
            source={require("../images/ariana-grande.jpg")}
            resizeMode="cover"
          />
          {trackItems}
        </View>
      </ScrollView>
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
)(PlaylistScreen);
