import React, { Suspense, useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { StyledLoader } from './components/Loader'
import JwtContext, { JwtProvider } from './JwtContext'
import routes from './routes'

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
            {routes.map(route => {
              const RouteComponent = route.private ? ProtectedRoute : Route

              return (
                <RouteComponent
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              )
            })}
          </Switch>
        </Suspense>
      </Router>
    </JwtProvider>
  )
}

export default App
