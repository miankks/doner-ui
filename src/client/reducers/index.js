import { combineReducers } from 'redux'
import authReducer from './authReducer'
import currentUserReducer from './currentUserReducer'
import authUsersReducer from './authUsersReducer'
import donationsReducer from './donationsReducer'
import activePackagesReducer from './activePackagesReducer'
import packagesReducer from './packagesReducer'
import newsReducer from './newsReducer'

export default combineReducers({
  auth: authReducer,
  current_user: currentUserReducer,
  auth_users: authUsersReducer,
  donations: donationsReducer,
  activePackages: activePackagesReducer,
  packages: packagesReducer,
  news: newsReducer,
})
