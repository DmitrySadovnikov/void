import { GET_TRANSFERS, INIT_CREATE_TRANSFER, CREATE_TRANSFER } from '../actions/actionTypes'

const initialState = { collection: [], success: false }

const transfers = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case INIT_CREATE_TRANSFER:
      newState = { collection: [], success: false }

      return newState
    case CREATE_TRANSFER:
    case GET_TRANSFERS:
      newState = { collection: action.collection, success: action.success }

      return newState
    default:
      return state
  }
}

export default transfers
