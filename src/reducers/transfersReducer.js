import { GET_TRANSFERS } from '../actions/actionTypes'

const initialState = { collection: [], success: false }

const transfers = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case GET_TRANSFERS:
      newState = { collection: action.collection, success: action.success }

      return newState
    default:
      return state
  }
}

export default transfers
