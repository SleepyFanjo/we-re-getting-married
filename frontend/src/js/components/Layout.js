import React from 'react'
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

const FooterLink = ({ to, icon, title }) => {
  const location = useLocation()
  const selected = location.pathname === to

  return (
    <Link to={to} className={`Footer--link ${selected ? 'selected' : ''}`}>
      <i className="material-icons">{icon}</i>
      <b className="Footer--linkTitle">{title}</b>
    </Link>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <div className="Header">
        <img alt="Logo" src={logo} className="Header--logo" />
      </div>
      <div className="Header--padder" />
      {children}
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
    </>
  )
}

export default Layout
