import { FETCH_CURRENT_USER, FETCH_LOGIN, FETCH_LOGOUT } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data ? true : false
    case FETCH_LOGIN:
      return action.payload.data ? true : false
    case FETCH_LOGOUT:
      return false
    default:
      return state
  }
}
