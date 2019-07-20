import {
  GET_TORRENT_POSTS,
  INIT_SEARCH_TORRENT_POSTS,
  DOWNLOAD_TORRENT_POST
} from '../actions/actionTypes'

const initialState = { collection: [], success: true }

const torrentPosts = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case INIT_SEARCH_TORRENT_POSTS:
      newState = { collection: [], success: false }

      return newState
    case DOWNLOAD_TORRENT_POST:
    case GET_TORRENT_POSTS:
      newState = { collection: action.collection, success: action.success }

      return newState
    default:
      return state
  }
}

export default torrentPosts
