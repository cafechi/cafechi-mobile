import axios from "axios";

export const GET_PLAYLIST_LIST_START = "GET_PLAYLIST_LIST_START";
export const GET_PLAYLIST_LIST_SUCCESS = "GET_PLAYLIST_LIST_SUCCESS";
export const NETWORK_ERROR = "GET_PLAYLIST_LIST_FAIL";

const baseUrl = "http://192.168.1.73:8000";

export function getPlaylistList() {
  return (dispatch, getState) => {
    dispatch({ type: GET_PLAYLIST_LIST_START });
    axios
      .get(baseUrl + "/api/playlist/")
      .then(response => {
        dispatch({ type: GET_PLAYLIST_LIST_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.warn(err);
        dispatch({ type: NETWORK_ERROR, payload: err });
      });
  };
}

export function setPlayingTrack() {
  return (dispatch, getState) => {
    axios
      .put(baseUrl + "/api/receiver/1/", {
        status: "PAUSE",
        track: 1
      })
      .then(response => {
        console.warn(response);
      })
      .catch(err => {
        console.warn(err);
        dispatch({ type: NETWORK_ERROR, payload: err });
      });
  };
}
