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
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/registered" component={Registered} />>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
