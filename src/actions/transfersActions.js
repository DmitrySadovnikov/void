import { APIURL } from '../utils/constants'
import { GET_TRANSFERS } from './actionTypes'

const GET_TRANSFERS_URL = `${APIURL}/web/v1/transfers`

export const fetchTransfers = () => {
  return (dispatch) => {
    return fetch(GET_TRANSFERS_URL, {
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
