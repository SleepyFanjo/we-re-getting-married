import React, { useContext } from 'react'
import JwtContext from '../JwtContext'
import { Redirect } from 'react-router-dom'

const Logout = () => {
  const { setJwtToken } = useContext(JwtContext)
  setJwtToken(null)
  localStorage.removeItem('jwtToken')

  return <Redirect to="/" />
}

export default Logout
