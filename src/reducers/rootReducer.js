import { combineReducers } from 'redux'
import transfers from './transfersReducer'
import torrentPosts from './torrentPostsReducer'

const rootReducer = combineReducers({
  transfers,
  torrentPosts,
})

export default rootReducer
