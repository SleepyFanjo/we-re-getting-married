import React from 'react'
import logo from '../../assets/logo.svg'
import Link from './Link'

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
          <Link to="/" icon="assignment_turned_in" title="Statut" />
          <Link to="/guest" icon="sentiment_very_satisfied" title="Invités" />
          <Link to="/transport" icon="directions_car" title="Transport" />
          <Link to="/beds" icon="hotel" title="Sur Place" />
        </div>
      )}
    </>
  )
}

export default Layout
