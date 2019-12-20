import React, { Suspense, lazy, useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { StyledLoader } from './components/Loader'
import JwtContext, { JwtProvider } from './JwtContext'

const Home = lazy(() => import('./pages/Home.js'))
const Register = lazy(() => import('./pages/Register.js'))
const Registered = lazy(() => import('./pages/Registered.js'))
const Login = lazy(() => import('./pages/Login.js'))
const Logout = lazy(() => import('./pages/Logout.js'))

const ProtectedRoute = ({ children, ...rest }) => {
  const { jwtToken } = useContext(JwtContext)
  return (
    <Route {...rest}>{jwtToken ? children : <Redirect to="/login" />}</Route>
  )
}

const App = () => {
  return (
    <JwtProvider>
      <Router>
        <Suspense fallback={<StyledLoader />}>
          <Switch>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/registered">
              <Registered />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </JwtProvider>
  )
}

export default App
