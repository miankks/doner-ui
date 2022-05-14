import { FETCH_ACTIVEPACKAGES } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ACTIVEPACKAGES:
      return action.payload.data
    default:
      return state
  }
}
