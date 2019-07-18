import axios from "axios";

export const GET_PLAYLIST_LIST_START = "GET_PLAYLIST_LIST_START";
export const GET_PLAYLIST_LIST_SUCCESS = "GET_PLAYLIST_LIST_SUCCESS";
export const GET_PLAYLIST_LIST_FAIL = "GET_PLAYLIST_LIST_FAIL";

export function getPlaylistList() {
  return (dispatch, getState) => {
    dispatch({ type: GET_PLAYLIST_LIST_START });
    axios
      .get("http://192.168.1.73:8000/api/playlist/")
      .then(response => {
        dispatch({ type: GET_PLAYLIST_LIST_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.warn(err);
        dispatch({ type: GET_PLAYLIST_LIST_FAIL, payload: err });
      });
  };
}
