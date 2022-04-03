
import Dashboard from 'views/Dashboard.js'
import UserPage from 'views/User.js'
import Login from 'views/Login.js'
import ForgotCred from 'views/ForgotCred.js'
import Reset from 'views/ResetCred.js'
const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    layout: '/admin',
    show: true
  },
  {
    path: '/user-page',
    name: 'User Profile',
    component: UserPage,
    layout: '/admin',
    show: true
  },
  {
    path: '/login-page',
    name: 'Sign In',
    component: Login,
    layout: '/admin',
    show: true
  },
  {
    path: '/forgot-credentials',
    name: 'Forgot-credentials',
    component: ForgotCred,
    layout: '/admin',
    show: false
  },
  {
    path: '/reset-credentials',
    name: 'Reset-credentials',
    component: Reset,
    layout: '/admin',
    show: false
  }
]
export default routes
