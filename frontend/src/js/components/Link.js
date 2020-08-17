import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import routes from '../routes'

const Link = ({ to, icon, title }) => {
  const location = useLocation()
  const selected = location.pathname === to
  const routeToPreload = routes.find(route => {
    return route.path === to
  })

  let onMouseEnter = undefined

  if (routeToPreload) {
    onMouseEnter = () => {
      routeToPreload.component.preload()
    }
  }

  return (
    <RouterLink
      to={to}
      onMouseEnter={onMouseEnter}
      className={`Link ${selected ? 'selected' : ''}`}
    >
      <i className="material-icons">{icon}</i>
      <b className="Link--linkTitle">{title}</b>
    </RouterLink>
  )
}

export default Link
