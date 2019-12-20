import React from 'react'
import logo from '../../assets/logo.png'

const Header = ({ children }) => {
  return (
    <>
      <div className="Header">
        <img alt="Logo" src={logo} className="Header--logo" />
      </div>
      <div className="Header--padder" />
      {children}
    </>
  )
}

export default Header
