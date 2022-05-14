import { FETCH_CURRENT_USER, FETCH_LOGIN, FETCH_LOGOUT } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || null
    case FETCH_LOGIN:
      return action.payload.data || null
    case FETCH_LOGOUT:
      return null
    default:
      return state
  }
}
