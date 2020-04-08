import React, { useContext } from 'react'
import JwtContext from '../JwtContext'
import { Redirect } from 'react-router-dom'

const Logout = () => {
  const { setJsonWebToken } = useContext(JwtContext)
  setJsonWebToken(null)
  localStorage.removeItem('jwtToken')

  return <Redirect to="/" />
}

export default Logout
