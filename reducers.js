import { combineReducers } from 'redux'
import { SHOW_CARD } from './actions'

function activeQuestion (state = false, action) {
  switch (action.type) {
    case SHOW_CARD:
      return !state
      break;
    default:
      return state
  }
}

const jeopardyApp = combineReducers({
  activeQuestion
})

export default jeopardyApp
