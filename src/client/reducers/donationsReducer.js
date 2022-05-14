import { FETCH_DONATIONS } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DONATIONS:
      return action.payload.data
    default:
      return state
  }
}
