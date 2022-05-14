import App from './App'
import HomePage from './pages/HomePage'
import BlockchainPage from './pages/BlockchainPage'
import DonationsPage from './pages/DonationsPage'
import PackagePage from './pages/PackagePage'
import PackagesPage from './pages/PackagesPage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import NotFoundPage from './pages/NotFoundPage'
import ThankYouPage from './pages/ThankYouPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...BlockchainPage,
        path: '/blockchain',
        exact: true
      },
      {
        ...DonationsPage,
        path: '/donations'
      },
      {
        ...PackagePage,
        path: '/packages/:id',
        exact: true
      },
      {
        ...PackagesPage,
        path: '/packages',
        exact: true
      },
      {
        ...ThankYouPage,
        path: '/thankyou',
        exact: true
      },
      {
        ...LoginPage,
        path: '/login',
        exact: true
      },
      {
        ...LogoutPage,
        path: '/logout',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
