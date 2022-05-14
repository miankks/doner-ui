import { FETCH_PACKAGEBYID } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PACKAGEBYID: {
      let newState = {...state}
      newState[action.payload.id] = action.payload.data
      return newState
    }
    default:
      return state
  }
}
