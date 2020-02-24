import React from 'react'
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

import routes from '../routes'

const FooterLink = ({ to, icon, title }) => {
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
    <Link
      to={to}
      onMouseEnter={onMouseEnter}
      className={`Footer--link ${selected ? 'selected' : ''}`}
    >
      <i className="material-icons">{icon}</i>
      <b className="Footer--linkTitle">{title}</b>
    </Link>
  )
}

const Layout = ({ children, noFooter }) => {
  return (
    <>
      <div className="Header">
        <img alt="Logo" src={logo} className="Header--logo" />
      </div>
      <div className="Header--padder" />
      {children}
      {noFooter ? null : (
        <div className="Footer">
          <FooterLink to="/" icon="assignment_turned_in" title="Statut" />
          <FooterLink
            to="/guest"
            icon="sentiment_very_satisfied"
            title="Invités"
          />
          <FooterLink to="/transport" icon="directions_car" title="Transport" />
          <FooterLink to="/beds" icon="hotel" title="Sur Place" />
        </div>
      )}
    </>
  )
}

export default Layout
