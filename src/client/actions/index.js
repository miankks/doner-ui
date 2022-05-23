/* actions for auth */
import axios from 'axios'
export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/auth/users')

  dispatch({
    type: FETCH_USERS,
    payload: res,
  })
}

export const FETCH_CURRENT_USER = 'fetch_current_user'
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  let res = {}

  try {
    res = await api.get('/api/current_user')
  } catch {
    // user not signed in
  }

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  })
}

export const FETCH_LOGIN = 'fetch_login'
export const fetchLogin = (params) => async (dispatch, getState, api) => {
  const res = await api.post('/auth/login', params)

  dispatch({
    type: FETCH_LOGIN,
    payload: res,
  })
}

export const FETCH_LOGOUT = 'fetch_logout'
export const fetchLogout = () => async (dispatch, getState, api) => {
  const res = await api.post('/auth/logout')

  dispatch({
    type: FETCH_LOGOUT,
    payload: res,
  })
}

/* other actions */

export const FETCH_NEWS = 'fetch_news'
export const fetchNews = () => async (dispatch, getState, api) => {
  // const res = await api.get('/api/newspage')
  const res = await axios.get('/api/newspage')
  console.log('fetch news')
  dispatch({
    type: FETCH_NEWS,
    payload: res,
  })
}

export const FETCH_DONATIONS = 'fetch_donations'
export const fetchDonations = () => async (dispatch, getState, api) => {
  const res = await api.get('/api/donations')

  dispatch({
    type: FETCH_DONATIONS,
    payload: res,
  })
}

export const FETCH_ACTIVEPACKAGES = 'fetch_activePackages'
export const fetchActivePackages = () => async (dispatch, getState, api) => {
  const res = await api.get('/api/packages/active')

  dispatch({
    type: FETCH_ACTIVEPACKAGES,
    payload: res,
  })
}

export const FETCH_PACKAGEBYID = 'fetch_packageById'
export const fetchPackageById = (params) => async (dispatch, getState, api) => {
  const res = await api.get('/api/packages/' + params.id)

  dispatch({
    type: FETCH_PACKAGEBYID,
    payload: { id: params.id, data: res.data },
  })
}

export const postDonation = (params) => async (dispatch, getState, api) => {
  // let res = {}

  try {
    // res =
    await api.post('/api/donations', params)
  } catch {
    // post failed
  }

  // dispatch({
  //   type: FETCH_CURRENT_USER,
  //   payload: res
  // })
}
