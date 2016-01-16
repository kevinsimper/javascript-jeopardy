import { SHOW_CARD } from './actions'

const initialState = {
  activeQuestion: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_CARD:
      return Object.assign({}, state, {
        activeQuestion: !state.activeQuestion
      })
      break;
    default:
      return state
  }
}
