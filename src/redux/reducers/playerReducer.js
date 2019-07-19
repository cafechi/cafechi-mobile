import {
  GET_PLAYLIST_LIST_START,
  GET_PLAYLIST_LIST_SUCCESS,
  GET_PLAYLIST_LIST_FAIL
} from "../actions/playerActions";

const initialState = {
  playlists: [
    {
      id: 1,
      title: "Mint",
      tracks: [
        {
          id: 1,
          title: "wakeup in sky",
          resource_id: "3434323432",
          file: "/media/media/q.pm3",
          playlists: [1]
        },
        {
          id: 1,
          title: "wakeup in sky",
          resource_id: "3434323432",
          file: "/media/media/q.pm3",
          playlists: [1]
        },
        {
          id: 1,
          title: "wakeup in sky",
          resource_id: "3434323432",
          file: "/media/media/q.pm3",
          playlists: [1]
        },
        {
          id: 1,
          title: "wakeup in sky",
          resource_id: "3434323432",
          file: "/media/media/q.pm3",
          playlists: [1]
        }
      ]
    },
    {
      id: 2,
      title: "Mega Hit",
      tracks: [
        {
          id: 1,
          title: "wakeup in sky",
          resource_id: "3434323432",
          file: "/media/media/q.pm3",
          playlists: [1]
        }
      ]
    },
    {
      id: 3,
      title: "Easy",
      tracks: [
        {
          id: 1,
          title: "wakeup in sky",
          resource_id: "3434323432",
          file: "/media/media/q.pm3",
          playlists: [1]
        }
      ]
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
