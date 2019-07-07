import { FETCH_TRANSFERS, RECEIVE_TRANSFERS } from '../actions/actionTypes'

const initialState = { collection: [], success: false }

const transfers = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case FETCH_TRANSFERS:
      return action
    case RECEIVE_TRANSFERS:
      newState = { collection: action.collection, success: action.success }

      return newState
    default:
      return state
  }
}

export default transfers
