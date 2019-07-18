import {
  GET_PLAYLIST_LIST_START,
  GET_PLAYLIST_LIST_SUCCESS,
  GET_PLAYLIST_LIST_FAIL
} from "../actions/playerActions";

const initialState = {
  playlists: [
    {
      title: "test title 1"
    },
    {
      title: "test title 2"
    }
  ],
  playlistsLoading: false,
  errorMessage: null
};

function palyerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLIST_LIST_START:
      return {
        ...state,
        playlistsLoading: true
      };
    case GET_PLAYLIST_LIST_SUCCESS:
      return {
        ...state,
        playlists: action.payload,
        playlistsLoading: false
      };
    case GET_PLAYLIST_LIST_FAIL:
      return {
        ...state,
        playlistsLoading: false,
        errorMessage: action.payload
      };
  }
  return state;
}

export default palyerReducer;
