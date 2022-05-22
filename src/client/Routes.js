import App from './App'
import HomePage from './pages/HomePage'
import EwaysInfoPage from './pages/EwaysInfoPage'
import CoursesPage from './pages/CoursesPage'
import PackagePage from './pages/PackagePage'
import PackagesPage from './pages/PackagesPage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import NotFoundPage from './pages/NotFoundPage'
import ThankYouPage from './pages/ThankYouPage'
import NewsPage from './pages/NewsPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...EwaysInfoPage,
        path: '/ewaysinfo',
        exact: true,
      },
      {
        ...CoursesPage,
        path: '/courses',
      },
      {
        ...PackagePage,
        path: '/packages/:id',
        exact: true,
      },
      {
        ...PackagesPage,
        path: '/packages',
        exact: true,
      },
      {
        ...ThankYouPage,
        path: '/thankyou',
        exact: true,
      },
      {
        ...LoginPage,
        path: '/login',
        exact: true,
      },
      {
        ...LogoutPage,
        path: '/logout',
        exact: true,
      },
      {
        ...NewsPage,
        path: '/newspage',
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
]
