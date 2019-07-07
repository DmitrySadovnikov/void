import { APIURL } from '../utils/constants'
import * as types from './actionTypes'

const GET_TRANSFERS = `${APIURL}/web/v1/transfers`

export const receiveTransfers = (json) => {
  return { type: types.RECEIVE_TRANSFERS, collection: json.collection, success: true }
}

export const fetchTransfers = () => {
  return (dispatch) => {
    return fetch(GET_TRANSFERS, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(receiveTransfers(json)))
  }
}
