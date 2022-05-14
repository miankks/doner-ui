import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import Routes from './Routes'
import reducers from './reducers'

const loggerMiddleware = createLogger()
const axiosInstance = axios.create({
  baseURL: '/'
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance), loggerMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <BreadcrumbsProvider>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </BreadcrumbsProvider>
  </Provider>,
  document.querySelector('#root')
)
