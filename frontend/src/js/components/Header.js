import React from 'react'
import logo from '../../assets/logo.png'

const Header = ({ children }) => {
  return (
    <>
      <div className="Header">
        <img src={logo} className="Header--logo" />
      </div>
      {children}
    </>
  )
}

export default Header
