import React, { Suspense, lazy } from 'react'
import { StyledLoader } from './components/Loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home.js'))
const Register = lazy(() => import('./pages/Register.js'))
const Registered = lazy(() => import('./pages/Registered.js'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<StyledLoader />}>
        <Switch>
          <Route exact path="/">
            <Home />
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
  )
}

export default App
