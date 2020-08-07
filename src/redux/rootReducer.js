import { combineReducers } from 'redux'
import sidebarReducer from './sidebar/sidebarReducer'

const rootReducer = combineReducers({
  side: sidebarReducer
})

export default rootReducer