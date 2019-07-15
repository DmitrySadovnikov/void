import { APIURL } from '../utils/constants'
import {
  GET_TORRENT_POSTS,
  INIT_SEARCH_TORRENT_POSTS,
  DOWNLOAD_TORRENT_POST,
} from './actionTypes'

const SEARCH_TORRENT_POSTS_URL = `${APIURL}/web/v1/torrent_posts/search`
const DOWNLOAD_TORRENT_POST_URL = `${APIURL}/web/v1/transfers`

export const initSearchTorrentPosts = () => {
  return { type: INIT_SEARCH_TORRENT_POSTS, collection: [], success: true }
}

export const updateStateCollection = (type, collection) => {
  return { type, collection, success: true }
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
      .then((json) => dispatch(updateStateCollection(GET_TORRENT_POSTS, json.collection)))
  }
}

export const updateMemberInCollection = (collection, json) => {
  return collection.map((post) => {
    if (post.id === json.torrent_post.id) {
      return { ...post, downloading: true }
    }

    return post
  })
}

export const downloadTorrentPost = (torrentPostId, collection) => {
  return (dispatch) => {
    return fetch(DOWNLOAD_TORRENT_POST_URL, {
      method: 'POST',
      body: JSON.stringify({
        torrent_post_id: torrentPostId,
      }),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => updateMemberInCollection(collection, json))
      .then((items) => dispatch(updateStateCollection(DOWNLOAD_TORRENT_POST, items)))
  }
}
