import { APIURL } from '../utils/constants'
import { GET_TORRENT_POSTS, INIT_SEARCH_TORRENT_POSTS } from './actionTypes'

const SEARCH_TORRENT_POSTS_URL = `${APIURL}/web/v1/torrent_posts/search`

export const initSearchTorrentPosts = () => {
  return { type: INIT_SEARCH_TORRENT_POSTS, collection: [], success: true }
}

export const searchTorrentPosts = (searchText) => {
  return (dispatch) => {
    return fetch(`${SEARCH_TORRENT_POSTS_URL}?search=${searchText}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({
        type: GET_TORRENT_POSTS,
        collection: json.collection,
        success: true,
      }))
  }
}
