import { combineReducers } from 'redux'
import transfers from './transfersReducer'

const rootReducer = combineReducers({
  transfers,
})

export default rootReducer
