import { APIURL } from '../utils/constants'
import { GET_TRANSFERS, INIT_CREATE_TRANSFER, CREATE_TRANSFER } from './actionTypes'

const TRANSFERS_URL = `${APIURL}/web/v1/transfers`

export const addMemberToCollection = (collection, json) => {
  collection.unshift(json)

  return collection
}

export const updateStateCollection = (type, collection) => {
  return { type, collection, success: true }
}

export const getTransfers = () => {
  return (dispatch) => {
    return fetch(TRANSFERS_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({
        type: GET_TRANSFERS,
        collection: json.collection,
        success: true,
      }))
  }
}

export const initCreateTransfer = () => {
  return { type: INIT_CREATE_TRANSFER, collection: [], success: true }
}

export const createTransfer = (inputText, collection) => {
  return (dispatch) => {
    return fetch(TRANSFERS_URL, {
      method: 'POST',
      body: JSON.stringify({
        magnet_link: inputText,
      }),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => addMemberToCollection(collection, json))
      .then((items) => dispatch(updateStateCollection(CREATE_TRANSFER, items)))
  }
}
