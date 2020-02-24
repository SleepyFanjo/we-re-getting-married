import LazyWithPreload from './utils/LazyWithPreload'

const Home = LazyWithPreload(() => import('./pages/Home.js'))
const Guest = LazyWithPreload(() => import('./pages/Guest.js'))
const Beds = LazyWithPreload(() => import('./pages/Beds.js'))
const Transport = LazyWithPreload(() => import('./pages/Transport.js'))
const Register = LazyWithPreload(() => import('./pages/Register.js'))
const Registered = LazyWithPreload(() => import('./pages/Registered.js'))
const Login = LazyWithPreload(() => import('./pages/Login.js'))
const Logout = LazyWithPreload(() => import('./pages/Logout.js'))

const routes = [
  { path: '/', exact: true, component: Home, private: true },
  { path: '/guest', exact: true, component: Guest, private: true },
  { path: '/transport', exact: true, component: Transport, private: true },
  { path: '/beds', exact: true, component: Beds, private: true },
  { path: '/login', exact: false, component: Login, private: false },
  { path: '/logout', exact: false, component: Logout, private: false },
  { path: '/register', exact: false, component: Register, private: false },
  { path: '/registered', exact: false, component: Registered, private: false }
]

export default routes
